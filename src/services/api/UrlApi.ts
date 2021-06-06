import { HttpClient } from '../helpers/clients/HttpClient'

class UrlApi {
  public metadata(url: string) {
    return HttpClient.post<App.Upload.FromResponse>('/uploads/froms/url', {
      url
    }).then((res) => res.data)
  }
}

export default new UrlApi()
