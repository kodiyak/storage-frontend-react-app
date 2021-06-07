import FileUploadCollection from '../collections/FileUploadCollection'
import GDriveAuthCollection from '../collections/GDriveAuthCollection'
import { HttpClient } from '../helpers/clients/HttpClient'
import GDriveAuthApi from './GDriveAuthApi'

interface AuthBootstrap {
  gDriveAuths: App.GDriveAuth[]
  filesUploads: App.FileUpload.Main[]
}

class AuthApi {
  public bootstrap() {
    return HttpClient.get<AuthBootstrap>('/oauth/bootstrap')
      .then((res) => res.data)
      .then(async (bootstrapData) => {
        GDriveAuthCollection.addMany(bootstrapData.gDriveAuths)
        FileUploadCollection.addMany(bootstrapData.filesUploads)

        for (const gDriveAuth of bootstrapData.gDriveAuths) {
          await GDriveAuthApi.loadAbout(gDriveAuth)
          await GDriveAuthApi.loadFiles(gDriveAuth)
          await GDriveAuthApi.loadFolders(gDriveAuth)
        }

        return bootstrapData
      })
  }
}

export default new AuthApi()
