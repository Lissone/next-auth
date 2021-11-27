import { validateUserPermissions } from '../utils/validateUserPermissions'

import { useAuth } from '../contexts/AuthContext'

interface useCanParams {
  permissions?: string[]
  roles?: string[]
}

export function useCan({ permissions, roles }: useCanParams) {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return false
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles
  })

  return userHasValidPermissions
}
