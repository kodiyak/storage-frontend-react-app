import React, { useEffect, useState } from 'react'
import Ws from '../../../../services/socket/Ws'
import { Progress } from '@chakra-ui/react'

interface FileProgressProps {
  fileUpload: App.FileUpload.Main
  name: App.FileUpload.ProgressName
}

const FileProgress: React.FC<FileProgressProps> = ({ fileUpload, name }) => {
  const [progress, setProgress] = useState(0)

  const onChangeProgress = (progressEvent: App.FileUpload.SocketProgressEvent) => {
    if (progressEvent.id === fileUpload.id && progressEvent.name === name) {
      setProgress(() => progressEvent.progress)
    }
  }

  useEffect(() => {
    Ws.socket.on('upload/file/progress', onChangeProgress)

    return () => {
      Ws.socket.off('upload/file/progress', onChangeProgress)
    }
  }, [])
  return (
    <Progress
      value={progress}
      size="xs"
      colorScheme="primary"
      mt={'auto'}
      rounded="lg"
      my={2}
    />
  )
}

export default FileProgress
