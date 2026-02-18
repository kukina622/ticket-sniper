import type { SectionDef } from './schema'

export type PlatformAdapter<TConfig, AConfig> = {
  id: string
  label: string
  getTaskDefaultConfig(): TConfig
  getTaskSections(): SectionDef<TConfig>[]
  getAuthDefaultConfig(): AConfig
  getAuthSections(): SectionDef<AConfig>[]
}
