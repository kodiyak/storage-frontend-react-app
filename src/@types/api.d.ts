declare namespace App {
  export interface Model {
    id: number
    created_at: Date
    updated_at: Date
  }

  export type SizeFormat =
    | 'Bytes'
    | 'KB'
    | 'MB'
    | 'GB'
    | 'TB'
    | 'PB'
    | 'EB'
    | 'ZB'
    | 'YB'
}
