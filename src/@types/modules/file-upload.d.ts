declare namespace App {
  export namespace FileUpload {
    export interface Main extends App.Model {
      file_name: string
      mime_type: string
      file_size: number
      from: 'url' | 'torrent' | 'localFile'
      to: 'server' | 'gdrive' | 'gphotos' | 'youtube'
      server_name: string
      options: any
      tmp_path: string
      server_path: string
      status_g_drive: string
      status_g_photos: string
      status_server_tmp: App.FileUpload.StatusServerTmp
      is_error: boolean
      g_drive_auth_id: number
      g_drive_folder_id: string
      g_drive_file_id: string
      g_youtube_file_id: string
      g_photos_album_id: string
      g_photos_file_id: string
    }

    export interface FileSystem {
      id: number
      file: File
    }

    export type StatusServerTmp =
      | 'queued'
      | 'uploading'
      | 'processing'
      | 'downloading'
      | 'uploaded'

    export type ProgressName =
      | 'Upload/Tmp'
      | 'Upload/Server'
      | 'Upload/GDrive'
      | 'Upload/GPhotos'

    export type SocketProgressEvent = {
      id: number
      name: App.FileUpload.ProgressName
      progress: number
    }
  }
}
