export interface TicketTask {
  id: string
  platformId: string
  eventName: string
  eventDate: string
  targetArea: string
  quantity: number
  status: 'waiting' | 'running' | 'success' | 'failed' | 'stopped'
  createdAt: string
  logs: TaskLog[]
}

export interface TaskLog {
  timestamp: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
}
