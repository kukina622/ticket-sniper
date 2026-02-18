export interface IPreloadAPI {
  openExternal: (url: string) => Promise<void>
}

declare global {
  interface Window {
    api: IPreloadAPI
  }
}
