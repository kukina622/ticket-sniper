import { ipcRenderer } from 'electron'
import ipcChannels from '@/ipc-channels'

export const linkApi = {
  openExternal: (url: string) =>
    ipcRenderer.invoke(ipcChannels.link.openExternal, url),
}
