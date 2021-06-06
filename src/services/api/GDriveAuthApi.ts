import GDriveAuthCollection from '../collections/GDriveAuthCollection'
import { HttpClient } from '../helpers/clients/HttpClient'
import Loaders from '../helpers/Loaders'
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

  private load(
    gDriveAuth: App.GDriveAuth,
    url: string,
    callback: (res: App.GDriveAuth) => any
  ) {
    Loaders.start(`GDriveAuth/${gDriveAuth.id}`)
    return HttpClient.get<App.GDriveAuth>(url)
      .then((res) => res.data)
      .then(callback)
      .finally(() => {
        Loaders.finish(`GDriveAuth/${gDriveAuth.id}`)
      })
  }

  public loadFiles(gDriveAuth: App.GDriveAuth) {
    return this.load(gDriveAuth, `/gdrivesauths/${gDriveAuth.id}/files`, (res) => {
      if (res.files) {
        gDriveAuth.files = res.files
      }
      GDriveAuthCollection.forceUpdate()
    })
  }

  public loadAbout(gDriveAuth: App.GDriveAuth) {
    return this.load(gDriveAuth, `/gdrivesauths/${gDriveAuth.id}/about`, (res) => {
      if (res.about) {
        gDriveAuth.about = res.about
      }
      GDriveAuthCollection.forceUpdate()
    })
  }

  public loadFolders(gDriveAuth: App.GDriveAuth) {
    return this.load(gDriveAuth, `/gdrivesauths/${gDriveAuth.id}/folders`, (res) => {
      if (res.folders) {
        gDriveAuth.folders = res.folders
      }
      GDriveAuthCollection.forceUpdate()
    })
  }
}

export default new GDriveAuthApi()
