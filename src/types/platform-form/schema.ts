export type FieldType =
  | 'text'
  | 'password'
  | 'number'
  | 'date'
  | 'time'
  | 'email'
  | 'switch'

export type FieldDef<T> = {
  name: keyof T
  label: React.ReactNode
  type: FieldType
  placeholder?: string
  required?: boolean
  min?: number
  max?: number
  step?: number
  when?: (values: T) => boolean
}

export type SectionDef<T> = {
  key: string
  title: string
  icon?: React.ReactNode
  fields: Array<FieldDef<T> | FieldDef<T>[]>
  layout?: {
    column?: 'left' | 'right' | 'full'
  }
}
