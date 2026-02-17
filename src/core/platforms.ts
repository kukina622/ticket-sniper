import type { TicketPlatform } from '@/types/platform'
import type { PlatformAdapter } from '@/types/platform-form/adapter'
import { tixcraftAdapter } from './tixcraft/adapter'
import type { TixcraftTaskConfig } from './tixcraft/config'

export const platforms: TicketPlatform[] = [
  {
    id: 'tixcraft',
    name: 'tixCraft',
    url: 'https://tixcraft.com',
    description: '演唱會、音樂節、舞台劇等大型活動售票平台',
    category: '綜合售票',
    features: ['演唱會', '音樂節', '舞台劇', '體育賽事'],
    logo: 'T',
    color: '199 89% 48%',
  },
]

type PlatformAdapterMapping = {
  tixcraft: PlatformAdapter<TixcraftTaskConfig>
}

export const platformAdapterMapping: PlatformAdapterMapping = {
  tixcraft: tixcraftAdapter,
}

export type PlatformId = keyof PlatformAdapterMapping
export type PlatformConfig =
  PlatformAdapterMapping[PlatformId] extends PlatformAdapter<infer TConfig>
    ? TConfig
    : never

export const isPlatformId = (id: string): id is PlatformId =>
  id in platformAdapterMapping
