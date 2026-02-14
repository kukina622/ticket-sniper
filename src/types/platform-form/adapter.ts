import type { SectionDef } from './schema'

export type PlatformAdapter<TConfig> = {
  id: string
  label: string
  getDefaultConfig(): TConfig
  getSections(): SectionDef<TConfig>[]
}
