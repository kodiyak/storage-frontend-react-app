import { FileChunk } from '../file/FileChunk'
import Ws from '../Ws'
export class UploadFileChannel {
  private configs = {
    chunkSize: 1000 * 1000 * 4,
    interval: 1000 * 5
  }

  private chunks: ArrayBuffer[] = []

  private fileChunk: FileChunk

  constructor(public fileSystem: App.FileUpload.FileSystem) {
    this.fileChunk = new FileChunk(fileSystem.file)
  }

  public async start() {
    this.chunks = await this.fileChunk.chunk(this.configs.chunkSize)
    const { id } = this.fileSystem

    for (const order in this.chunks) {
      // console.log(`[${order}][STARTING]`)
      // console.log('Order', order)
      // console.log('Chunk', this.chunks[order].byteLength)

      await this.uploadChunk(id, Number(order))

      // console.log(`[${order}][MORE]`)
    }
  }

  private uploadChunk(id: number, order: number) {
    return new Promise<void>((resolve) => {
      const chunk = this.chunks[order]

      Ws.socket.emit('upload/file', {
        id,
        order,
        chunk
      })

      const onMore = (data: any) => {
        if (data.id === id) {
          resolve()
          Ws.socket.off('upload/more', onMore)
        }
      }

      Ws.socket.on('upload/more', onMore)
    })
  }
}
