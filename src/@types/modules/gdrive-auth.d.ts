declare namespace App {
  export interface GDriveAuth extends App.Model {
    email: string
    gdrive_infos: {
      clientId: string
      clientSecret: string
      refreshToken: string
    }
    files?: import('googleapis').drive_v3.Schema$File[]
    folders?: import('googleapis').drive_v3.Schema$File[]
    about?: import('googleapis').drive_v3.Schema$About
  }
}
