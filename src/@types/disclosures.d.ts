declare namespace App {
  export interface Disclosures {
    'Modal.Test': {
      item: any
    }
    'Modal.GDrive.FolderPicker': {
      gDriveAuth: App.GDriveAuth
      onSelect: (folder: import('googleapis').drive_v3.Schema$File) => void
    }
  }

  export namespace Disclosures {
    export type Names = keyof App.Disclosures
  }
}
