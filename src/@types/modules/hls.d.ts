declare namespace App {
  export namespace Hls {
    export interface M3u8 extends App.Model {
      path: string
      file_upload_id: number
      segments: App.Hls.Segment[]
    }

    export interface Segment extends App.Model {
      local_path: string
      g_drive_file_id: number
      g_drive_folder_id: number
      g_drive_album_id: number
      g_drive_file_id: number
      hls_m3u8_id: number
      g_drive_auth_id: number
      order: number
    }
  }
}
