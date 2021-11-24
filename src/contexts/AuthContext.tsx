import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies } from 'nookies'

import { api } from '../services/api'

interface User {
  email: string
  permissions: string[]
  roles: string[]
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  isAuthenticated: boolean
  user: User | null
  signIn(credentials: SignInCredentials): Promise<void>
}

const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

interface ResponseSessionsData {
  permissions: string[]
  roles: string[]
  refreshToken: string
  token: string
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies()

    if (token) {
      api.get<User>('/me').then(response => {
        const { email, permissions, roles } = response.data

        setUser({ email, permissions, roles })
      })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<ResponseSessionsData>('/sessions', {
        email,
        password
      })

      const { permissions, roles, token, refreshToken } = response.data

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setCookie(undefined, '@nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setUser({
        email,
        permissions,
        roles
      })

      Router.push('/dashboard')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
