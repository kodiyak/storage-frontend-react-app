import React, { useEffect, useState } from 'react'
import Ws from '../../../../services/socket/Ws'
import { Progress, ProgressProps } from '@chakra-ui/react'
import { useProgress } from '../../../../hooks/socket/useProgress'

interface FileProgressProps extends ProgressProps {
  fileUpload: App.FileUpload.Main
  name: App.ProgressName
}

const FileProgress: React.FC<FileProgressProps> = ({
  fileUpload,
  name,
  ...rest
}) => {
  const progress = useProgress(name, `${fileUpload.id}`)

  return (
    <Progress
      value={progress}
      size="xs"
      colorScheme="primary"
      mt={'auto'}
      rounded="lg"
      my={2}
      {...rest}
    />
  )
}

export default FileProgress
