import { TypedEmitter } from 'tiny-typed-emitter'
import Ws from '../Ws'

interface Bars {
  [key: string]: number
}

export interface ProgressData {
  name: string
  value: number
}

export class Progress extends TypedEmitter<{
  change: (data: ProgressData) => void
}> {
  private progresses: Bars = {}

  constructor(ws: typeof Ws) {
    super()
    ws.socket.on('progress', (v) => this.onProgressChange(v))
  }

  public set(name: string, value: number) {
    this.progresses[name] = value
    this.emit('change', { name, value })
  }

  public get(name: string) {
    return this.progresses[name]
  }

  private onProgressChange({ name, value }: ProgressData) {
    console.log('Progress Change', name, value)
    this.set(name, value)
  }
}
