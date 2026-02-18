import { ipcMain, shell } from 'electron'
import ipcChannels from '@/ipc-channels'

export function registerLinkIpcHandlers() {
  ipcMain.handle(ipcChannels.link.openExternal, async (_evt, url: string) => {
    shell.openExternal(url)
  })
}
