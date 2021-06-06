import { Badge, Heading, Progress, Square, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Col, Row } from '../../../../../packages/react-chakra-ui'
import { UploadIcon } from '../../../../../packages/react-chakra-ui/src/icons'
import FilesystemFileCollection from '../../../../../services/collections/FileUpload/FilesystemFileCollection'
import { UploadFileChannel } from '../../../../../services/socket/upload/UploadFileChannel'
import Ws from '../../../../../services/socket/Ws'

interface SidebarFileUploadItemProps {
  fileUpload: App.FileUpload.Main
}

const SidebarFileUploadItem: React.FC<SidebarFileUploadItemProps> = ({
  fileUpload
}) => {
  const [progress, setProgress] = useState(0)

  const onChangeProgress = ({ id, progress }: any) => {
    if (id === fileUpload.id) {
      console.log('progress emit', id, progress)
      setProgress(() => progress)
    }
  }

  useEffect(() => {
    Ws.socket.on('upload/file/progress', onChangeProgress)

    return () => {
      Ws.socket.off('upload/file/progress', onChangeProgress)
    }
  }, [])

  return (
    <Row h={10}>
      <Square size={10} rounded="lg" bg="gray.800" color="primary.500">
        <UploadIcon />
      </Square>
      <Col flex={1} pl={2} minH="100%">
        <Row flex={1} alignItems="center">
          <Heading size="xs" userSelect="none" flex={1}>
            {fileUpload.file_name}
          </Heading>
          <Button
            size="xs"
            mr={2}
            onClick={() => {
              const fileSystem = FilesystemFileCollection.findBy('id', fileUpload.id)
              if (fileSystem) {
                console.log('file system', fileSystem)
                const channel = new UploadFileChannel(fileSystem)
                channel.start()
              }
            }}
          >
            Start
          </Button>
          <Badge>{fileUpload.status_server_tmp}</Badge>
        </Row>
        <Progress
          value={progress}
          size="xs"
          colorScheme="primary"
          mt={'auto'}
          rounded="lg"
        />
      </Col>
    </Row>
  )
}

export default SidebarFileUploadItem
