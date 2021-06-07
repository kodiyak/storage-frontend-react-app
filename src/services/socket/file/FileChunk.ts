export class FileChunk {
  private offset = 0

  private totalBytes = 0

  private chunkSize = 10000

  private chunks: ArrayBuffer[] = []

  constructor(private file: File) {
    this.totalBytes = file.size
  }

  public async chunk(chunkSize: number) {
    this.chunkSize = chunkSize

    console.log(this.totalBytes, this.chunkSize)
    console.log('Start Chunk', this.chunks.length)

    await this.nextBlob()
    console.log('Finish Chunk', this.chunks.length)

    this.totalBytes = 0
    this.offset = 0

    return this.chunks
  }

  public async nextBlob(): Promise<void> {
    const { offset, chunkSize, totalBytes } = this
    const getNextOffset = () => {
      const nextOffset = offset + chunkSize
      return nextOffset <= totalBytes ? nextOffset : totalBytes
    }

    const nextOffset = getNextOffset()
    const reader = new FileReader()
    const blob = this.file.slice(this.offset, nextOffset)

    this.chunks.push(await blob.arrayBuffer())

    if (nextOffset !== totalBytes) {
      this.offset = nextOffset

      return this.nextBlob()
    } else {
      this.offset = totalBytes
    }
  }
}
