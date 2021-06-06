declare namespace App {
  export namespace FileUpload {
    export interface Main extends App.Model {
      file_name: string
      mime_type: string
      file_size: number
      from: 'url' | 'torrent' | 'localFile'
      to: 'server' | 'gdrive' | 'gphotos'
      server_name: string
      options: any
      status_g_drive: string
      status_g_photos: string
      status_server_tmp: string
      is_error: boolean
      g_drive_auth_id: number
    }

    export interface FileSystem {
      id: number
      file: File
    }
  }
}
