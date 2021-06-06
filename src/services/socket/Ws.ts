import { io, Socket } from 'socket.io-client'

class Ws {
  private booted = false
  public socket!: Socket

  public boot() {
    if (!this.booted) {
      this.socket = io('http://localhost:3333')
      this.booted = true

      this.socket.emit('test', {
        message: '[WS][Client] - React Application Successfully Connected'
      })
    }
  }
}

export default new Ws()
