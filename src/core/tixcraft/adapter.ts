import type { PlatformAdapter } from '@/types/platform-form/adapter'
import type { TixcraftAuthConfig, TixcraftTaskConfig } from './config'
import { tixcraftAuthSections, tixcraftTaskSections } from './schema'

export const tixcraftAdapter: PlatformAdapter<
  TixcraftTaskConfig,
  TixcraftAuthConfig
> = {
  id: 'tixcraft',
  label: 'tixCraft',

  getTaskDefaultConfig() {
    return {
      eventUrl: '',
      eventName: '',
      eventDate: '',
      startTime: '',
      targetArea: '',
      quantity: 2,
      maxPrice: 0,

      autoFill: true,
      buyerName: '',
      buyerPhone: '',
      buyerEmail: '',
      buyerId: '',

      refreshInterval: 500,
      maxRetries: 100,
    }
  },

  getTaskSections() {
    return tixcraftTaskSections
  },

  getAuthDefaultConfig() {
    return {
      sid: '',
    }
  },

  getAuthSections() {
    return tixcraftAuthSections
  },
}
