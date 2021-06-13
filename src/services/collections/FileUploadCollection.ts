import { Collection } from '../../packages/react-chakra-ui/helpers'
import Ws from '../socket/Ws'

class FileUploadCollection extends Collection<App.FileUpload.Main> {
  constructor() {
    super()
    Ws.socket.on('/fileUpload', (fileUpload: App.FileUpload.Main) => {
      this.set(fileUpload)
    })
  }
}

export default new FileUploadCollection()
