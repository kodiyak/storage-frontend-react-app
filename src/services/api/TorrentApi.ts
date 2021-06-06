import { HttpClient } from '../helpers/clients/HttpClient'

class TorrentApi {
  public metadata(url: string) {
    return HttpClient.post<App.Upload.FromResponse>(
      '/uploads/froms/torrent/metadata',
      {
        url
      }
    ).then((res) => res.data)
  }
}

export default new TorrentApi()
