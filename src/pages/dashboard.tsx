import { useEffect } from 'react'

import { withSSRAuth } from '../utils/withSSRAuth'

import { api } from '../services/apiClient'
import { setupAPIClient } from '../services/api'

import { useAuth } from '../contexts/AuthContext'

import { Can } from '../components/Can'

export default function Dashboard() {
  const { user } = useAuth()

  useEffect(() => {
    api
      .get('/me')
      .then(response => console.log(response.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <Can permissions={['metrics.test']}>
        <h3>Métricas</h3>
      </Can>
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
