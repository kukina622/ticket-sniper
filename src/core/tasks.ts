import type { TicketTask } from '@/types/task'

// Dummy Task Data
export const DummyTasks: TicketTask[] = [
  {
    id: 'task-1',
    platformId: 'tixcraft',
    eventName: '五月天 2026 巡迴演唱會',
    eventDate: '2026-05-15',
    targetArea: '搖滾區 A',
    quantity: 2,
    status: 'running',
    createdAt: '2026-02-12T08:30:00',
    logs: [
      { timestamp: '08:30:00', message: '任務已建立', type: 'info' },
      { timestamp: '08:30:01', message: '開始監控售票頁面', type: 'info' },
      {
        timestamp: '08:31:15',
        message: '偵測到頁面更新，準備搶票...',
        type: 'warning',
      },
      { timestamp: '08:31:16', message: '正在選擇座位區域...', type: 'info' },
    ],
  },
]
