import { useEffect } from 'react'

import { api } from '../services/api'

import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  useEffect(() => {
    api.get('/me').then(response => console.log(response.data))
  }, [])

  return (
    <div>
      <h1>Dashboard: {user?.email}</h1>
    </div>
  )
}
