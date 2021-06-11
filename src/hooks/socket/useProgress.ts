import { useEffect, useMemo, useState } from 'react'
import { ProgressData } from '../../services/socket/helpers/Progress'
import Ws from '../../services/socket/Ws'

export function useProgress(name: App.ProgressName, sufix?: string) {
  const progressName = useMemo(() => {
    return !sufix ? `${name}` : `${name}/${sufix}`
  }, [name])
  const [value, setValue] = useState(Ws.progress.get(progressName))

  const onChangeProgress = (progress: ProgressData) => {
    if (progress.name === progressName) {
      setValue(() => progress.value)
    }
  }

  useEffect(() => {
    Ws.progress.on('change', onChangeProgress)

    return () => {
      Ws.progress.off('change', onChangeProgress)
    }
  }, [])

  return value
}
