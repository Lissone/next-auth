import { useEffect } from 'react'

import { api } from '../services/api'

import { useAuth } from '../contexts/AuthContext'

import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  const { user } = useAuth()

  useEffect(() => {
    api
      .get('/me')
      .then(response => console.log(response.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Dashboard: {user?.email}</h1>
    </div>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => ({
  props: {}
}))
