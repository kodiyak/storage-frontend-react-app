import GDriveAuthCollection from '../collections/GDriveAuthCollection'
import { HttpClient } from '../helpers/clients/HttpClient'

interface AuthBootstrap {
  gDriveAuths: App.GDriveAuth[]
}

class AuthApi {
  public bootstrap() {
    return HttpClient.get<AuthBootstrap>('/oauth/bootstrap')
      .then((res) => res.data)
      .then((bootstrapData) => {
        GDriveAuthCollection.addMany(bootstrapData.gDriveAuths)

        return bootstrapData
      })
  }
}

export default new AuthApi()
