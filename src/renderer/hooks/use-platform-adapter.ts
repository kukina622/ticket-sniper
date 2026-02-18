import { useMemo } from 'react'
import { isPlatformId, platformAdapterMapping } from '@/core/platforms'

export default function usePlatformAdapter(platformId?: string) {
  const platformAdapter = useMemo(
    () =>
      isPlatformId(platformId) ? platformAdapterMapping[platformId] : undefined,
    [platformId]
  )

  return platformAdapter
}
