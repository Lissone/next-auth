import { useEffect } from 'react'

import { api } from '../services/apiClient'
import { setupAPIClient } from '../services/api'

import { withSSRAuth } from '../utils/withSSRAuth'

import { useAuth } from '../contexts/AuthContext'
import { useCan } from '../hooks/useCan'

export default function Dashboard() {
  const { user } = useAuth()

  const userCanSeeMetrics = useCan({
    roles: ['administrator']
  })

  useEffect(() => {
    api
      .get('/me')
      .then(response => console.log(response.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      {userCanSeeMetrics && <h3>Métricas</h3>}
    </>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx)

  const response = await apiClient.get('/me')
  console.log(response.data)

  return {
    props: {}
  }
})
