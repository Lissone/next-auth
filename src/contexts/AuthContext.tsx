import { createContext, ReactNode, useContext } from 'react'

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  isAuthenticated: boolean
  signIn(credentials: SignInCredentials): Promise<void>
}

const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false

  async function signIn({ email, password }: SignInCredentials) {
    console.log({ email, password })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
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
