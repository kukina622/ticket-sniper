export type TixcraftTaskConfig = {
  // 活動資訊
  eventUrl: string
  eventName: string
  eventDate: string // YYYY-MM-DD
  startTime: string // HH:mm:ss or HH:mm
  targetArea: string
  quantity: number
  maxPrice: number // 0 = 不限

  // 購票人資料
  autoFill: boolean
  buyerName: string
  buyerPhone: string
  buyerEmail: string
  buyerId: string

  // 進階設定
  refreshInterval: number
  maxRetries: number
}

export type TixcraftAuthConfig = {
  sid: string
}
