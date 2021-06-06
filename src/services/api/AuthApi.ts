import GDriveAuthCollection from '../collections/GDriveAuthCollection'
import { HttpClient } from '../helpers/clients/HttpClient'
import GDriveAuthApi from './GDriveAuthApi'

interface AuthBootstrap {
  gDriveAuths: App.GDriveAuth[]
}

class AuthApi {
  public bootstrap() {
    return HttpClient.get<AuthBootstrap>('/oauth/bootstrap')
      .then((res) => res.data)
      .then(async (bootstrapData) => {
        GDriveAuthCollection.addMany(bootstrapData.gDriveAuths)

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
