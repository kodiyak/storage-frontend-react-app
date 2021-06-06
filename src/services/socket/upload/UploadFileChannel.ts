import { FileChunk } from '../file/FileChunk'
import Ws from '../Ws'
export class UploadFileChannel {
  private configs = {
    chunkSize: 10000,
    interval: 1000 * 5
  }

  private chunks: string[] = []

  private fileChunk: FileChunk

  constructor(public fileSystem: App.FileUpload.FileSystem) {
    this.fileChunk = new FileChunk(fileSystem.file)
  }

  public async start() {
    this.chunks = await this.fileChunk.chunk(this.configs.chunkSize)
    const { id } = this.fileSystem

    // console.log('send socket', this.chunks.length)

    for (const order in this.chunks) {
      const chunk = this.chunks[order]
      // const name = `Chunk_${chunkKey}.mp4`

      // console.log('chunk', chunk)

      Ws.socket.emit('upload/file', {
        id,
        order,
        chunk
      })
    }
  }
}
