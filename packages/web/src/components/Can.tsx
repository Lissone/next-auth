import { ReactNode } from 'react'

import { useCan } from '../hooks/useCan'

interface CanProps {
  permissions?: string[]
  roles?: string[]
  children: ReactNode
}

export function Can({ permissions, roles, children }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles })

  if (!userCanSeeComponent) {
    return null
  }

  return <>{children}</>
}
