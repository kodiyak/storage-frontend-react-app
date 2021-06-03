import GDriveAuthCollection from '../collections/GDriveAuthCollection'
import { HttpClient } from '../helpers/clients/HttpClient'
class GDriveAuthApi {
  public async list() {
    HttpClient.get<App.GDriveAuth>('/gdrivesauths').then((res) => res.data)
  }

  public async show(id: number) {
    return HttpClient.get<App.GDriveAuth>(`/gdrivesauths/${id}`)
      .then((res) => res.data)
      .then((gDriveAuth) => {
        GDriveAuthCollection.set(gDriveAuth)

        return gDriveAuth
      })
  }
}

export default new GDriveAuthApi()
