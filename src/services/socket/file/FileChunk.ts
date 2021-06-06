export class FileChunk {
  private offset = 0

  private totalBytes = 0

  private chunkSize = 10000

  private chunks: (string | ArrayBuffer)[] = []

  constructor(private file: File) {
    this.totalBytes = file.size
  }

  public async chunk(chunkSize: number) {
    this.chunkSize = chunkSize

    console.log(this.totalBytes, this.chunkSize)

    await this.nextBlob()

    this.totalBytes = 0
    this.offset = 0

    return this.chunks as string[]
  }

  public async nextBlob(): Promise<void> {
    const { offset, chunkSize, totalBytes } = this
    const getNextOffset = () => {
      const nextOffset = offset + chunkSize
      return nextOffset <= totalBytes ? nextOffset : totalBytes
    }

    const nextOffset = getNextOffset()
    // console.log('next', offset, nextOffset)
    // console.log({
    //   offset,
    //   nextOffset,
    //   totalBytes
    // })
    const reader = new FileReader()
    const blob = this.file.slice(this.offset, nextOffset)

    // garantir ordem dos dados
    this.chunks.push(await blob.arrayBuffer())

    if (nextOffset !== totalBytes) {
      this.offset = nextOffset

      return this.nextBlob()
    } else {
      this.offset = totalBytes
    }

    // return new Promise((resolve) => {
    //   reader.onload = async (e) => {
    //     if (e.target?.error === null) {
    //       // @ts-ignore
    //       const result: string = e.target.result

    //       if (result !== null) {
    //         // @ts-ignore
    //         this.chunks.push(result)
    //       }

    //       if (nextOffset !== totalBytes) {
    //         this.offset = nextOffset

    //         await this.nextBlob()

    //         resolve()
    //       } else {
    //         this.offset = totalBytes
    //         resolve()
    //       }
    //     }
    //   }

    //   reader.readAsArrayBuffer(blob)
    // })
  }
}
