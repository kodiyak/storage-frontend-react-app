import {
  Badge,
  Heading,
  Progress,
  Square,
  Button,
  SimpleGrid,
  IconButton,
  Circle
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { Col, Row } from '../../../../../packages/react-chakra-ui'
import { UploadIcon } from '../../../../../packages/react-chakra-ui/src/icons'
import FilesystemFileCollection from '../../../../../services/collections/FileUpload/FilesystemFileCollection'
import Str from '../../../../../services/helpers/Str'
import { UploadFileChannel } from '../../../../../services/socket/upload/UploadFileChannel'
import FileProgress from '../../../../Modules/File/FileProgress/index'

interface SidebarFileUploadItemProps {
  fileUpload: App.FileUpload.Main
}

const SidebarFileUploadItem: React.FC<SidebarFileUploadItemProps> = ({
  fileUpload
}) => {
  const fileSystem = useMemo(() => {
    return FilesystemFileCollection.findBy('id', fileUpload.id)
  }, [fileUpload.id])

  return (
    <Col>
      <Row>
        <Square
          size={10}
          rounded="lg"
          bg="gray.800"
          color="primary.500"
          pos="relative"
          border="2px solid transparent"
          borderColor="primary.500"
        >
          <UploadIcon />
          <Circle
            size={6}
            bg="primary.500"
            pos="absolute"
            left={0}
            bottom={0}
            transform="translate(-20%, 50%)"
            color="white"
            fontSize="xs"
          >
            {fileUpload.id}
          </Circle>
        </Square>
        <Col flex={1} pl={2} minH="100%">
          <Row flex={1} alignItems="center">
            <Heading size="xs" userSelect="none" flex={1}>
              {Str.truncate(fileUpload.file_name, 28)}
            </Heading>
          </Row>
          <Row mt={2}>
            <Badge>{fileUpload.status_server_tmp}</Badge>
          </Row>
        </Col>
      </Row>
      <Row mt={1}>
        {fileSystem && fileUpload.status_server_tmp === 'queued' && (
          <IconButton
            aria-label="Start Upload"
            size={'xs'}
            rounded="sm"
            mr={2}
            onClick={() => {
              const channel = new UploadFileChannel(fileSystem)
              channel.start()
            }}
          >
            <UploadIcon />
          </IconButton>
        )}
      </Row>
      <FileProgress fileUpload={fileUpload} name="Upload/Tmp" />
      <FileProgress fileUpload={fileUpload} name="Upload/GDrive" />
    </Col>
  )
}

export default SidebarFileUploadItem
