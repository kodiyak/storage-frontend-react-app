import FilesystemFileCollection from '../collections/FileUpload/FilesystemFileCollection'
import FileUploadCollection from '../collections/FileUploadCollection'
import { HttpClient } from '../helpers/clients/HttpClient'
class FileUploadApi {
  public async create(data: any) {
    console.log('create file upload', data)
    const filesUploads = data.files_uploads.map((fileUpload: any) => {
      return {
        fileName: fileUpload.fileFrom.fileName,
        mimeType: fileUpload.fileFrom.mimeType,
        fileSize: fileUpload.fileFrom.size,
        from: fileUpload.from,
        to: fileUpload.to,
        url: fileUpload.fileFrom.url,
        gDriveFolderId: fileUpload.gDriveFolder?.id,
        gDriveAuthId: fileUpload.gDriveAuth?.id,
        options: fileUpload.options
      }
    })

    return HttpClient.post<App.FileUpload.Main[]>('/uploads/start', { filesUploads })
      .then((res) => res.data)
      .then((filesUploads) => {
        // FileUploadCollection.addMany(filesUploads)
        for (const keyFileUpload in filesUploads) {
          const { id } = filesUploads[keyFileUpload]
          FilesystemFileCollection.set({
            id,
            file: data.files_uploads[keyFileUpload].fileFrom.file
          })
        }
        return filesUploads
      })
  }

  public async all() {
    return HttpClient.get<App.FileUpload.Main[]>('/filesuploads')
      .then((res) => res.data)
      .then((filesUploads) => {
        FileUploadCollection.addMany(filesUploads)
      })
  }

  public async getMainFiles(fileUpload: App.FileUpload.Main) {
    return HttpClient.get<App.FileUpload.FisicalFile[]>(
      `/filesuploads/${fileUpload.id}/main`
    )
      .then((res) => res.data)
      .then((files) => {
        fileUpload.mainFiles = files
        FileUploadCollection.forceUpdate()
      })
  }

  public async getTmpFiles(fileUpload: App.FileUpload.Main) {
    return HttpClient.get<App.FileUpload.FisicalFile[]>(
      `/filesuploads/${fileUpload.id}/tmp`
    )
      .then((res) => res.data)
      .then((files) => {
        fileUpload.tmpFiles = files
        FileUploadCollection.forceUpdate()
      })
  }

  public async getHlsFiles(fileUpload: App.FileUpload.Main) {
    return HttpClient.get<App.Hls.M3u8[]>(`/filesuploads/${fileUpload.id}/hls`)
      .then((res) => res.data)
      .then((files) => {
        fileUpload.hlsFiles = files
        FileUploadCollection.forceUpdate()
      })
  }
}

export default new FileUploadApi()
