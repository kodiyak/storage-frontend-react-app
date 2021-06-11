import { io, Socket } from 'socket.io-client'
import { Progress } from './helpers/Progress'

class Ws {
  private booted = false
  public socket!: Socket
  public progress!: Progress

  public constructor() {
    this.boot()
  }

  public boot() {
    if (!this.booted) {
      this.socket = io('http://localhost:3333')
      this.booted = true

      this.socket.emit('test', {
        message: '[WS][Client] - React Application Successfully Connected'
      })

      this.socket.io.on('error', (err) => {
        console.error('error', err)
      })

      this.progress = new Progress(this)
    }
  }
}

export default new Ws()
