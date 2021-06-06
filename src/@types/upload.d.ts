declare namespace App {
  export namespace Upload {
    export interface FileFrom {
      url?: string
      fileName: string
      mimeType: string
      size: number
      file?: File
    }

    export interface FromResponse {
      froms?: App.Upload.FileFrom[]
      from?: App.Upload.FileFrom
      response?: any
    }

    export type FromType = 'url' | 'localFile' | 'torrent'
    export type ToType = 'server' | 'gdrive' | 'gphotos'
  }
}
