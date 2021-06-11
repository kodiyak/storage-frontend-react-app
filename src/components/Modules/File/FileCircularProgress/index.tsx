import React, { useEffect, useState } from 'react'
import Ws from '../../../../services/socket/Ws'
import {
  CircularProgress,
  CircularProgressProps,
  Progress,
  Circle
} from '@chakra-ui/react'
import BoxOverlay from '../../../../packages/react-chakra-ui/src/components/BoxOverlay/index'
import { useProgress } from '../../../../hooks/socket/useProgress'

interface FileCircularProgressProps extends CircularProgressProps {
  fileUpload: App.FileUpload.Main
  name: App.ProgressName
}

const FileCircularProgress: React.FC<FileCircularProgressProps> = ({
  fileUpload,
  name,
  size = 16,
  color = 'primary.500',
  children,
  ...rest
}) => {
  const progress = useProgress(name, `${fileUpload.id}`)

  return (
    <Circle size={size} pos="relative">
      <CircularProgress
        size={size}
        thickness="5px"
        color={color}
        trackColor="transparent"
        pos="absolute"
        left={0}
        top={0}
        zIndex={15}
        value={progress}
      />
      <BoxOverlay zIndex={10} p={1} {...rest}>
        {children}
      </BoxOverlay>
    </Circle>
  )
}

export default FileCircularProgress
