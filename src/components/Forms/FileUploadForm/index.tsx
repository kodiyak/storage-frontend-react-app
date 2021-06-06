import { Button, Heading, SimpleGrid, Checkbox } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Col, Row, TextMini } from '../../../packages/react-chakra-ui'
import { useDisclosure } from '../../../hooks/useDisclosure'
import { drive_v3 } from 'googleapis'
import { FolderIcon } from '../../../packages/react-chakra-ui/src/icons'
import { Text } from '@chakra-ui/layout'
import { useFieldState } from '../../../packages/react-chakra-ui/src/hooks/useFieldState'

interface FileUploadFormProps {
  name: string
  fileFrom: App.Upload.FileFrom
  gDriveAuth: App.GDriveAuth
  from: App.Upload.FromType
  to: App.Upload.ToType
}

interface FileUploadData extends Omit<FileUploadFormProps, 'name'> {
  gDriveFolder?: App.GDrive.Folder
}

const FileUploadForm: React.FC<FileUploadFormProps> = (props) => {
  const { name, fileFrom, gDriveAuth, from, to } = props
  const { onOpen, onClose } = useDisclosure('Modal.GDrive.FolderPicker')
  // const [gDriveFolder, setGDriveFolder] = useState<App.GDrive.Folder>()
  const [value, setValue] = useFieldState<FileUploadData>(name, undefined)

  useEffect(() => {
    setValue(() => props)
  }, [])

  const setGDriveFolder = (gDriveFolder: App.GDrive.Folder) => {
    setValue((oldValue) => ({
      ...oldValue,
      gDriveFolder
    }))
  }

  if (!value) return <></>

  return (
    <Col bg="gray.800" rounded="lg" p={2}>
      <Row p={2} bg="gray.700" rounded="lg">
        <Col flex={1}>
          <Heading size="xs">{fileFrom.fileName}</Heading>
        </Col>
        <TextMini>{fileFrom.mimeType}</TextMini>
      </Row>
      <Row>
        <Row
          mr="auto"
          userSelect="none"
          cursor="pointer"
          fontSize="sm"
          alignItems="center"
          color={!value.gDriveFolder ? 'GrayText' : ''}
          p={4}
          onClick={() => {
            onOpen({
              gDriveAuth,
              onSelect: (folder) => {
                onClose()
                setGDriveFolder(folder)
              }
            })
          }}
        >
          <FolderIcon />
          <Text ml={4}>
            {value.gDriveFolder ? `${value.gDriveFolder.name}` : 'Pick Folder'}
          </Text>
        </Row>
        <Row flex={1}>
          <Checkbox name="hls_encode" mr={2}>
            HLS Encode
          </Checkbox>
        </Row>
      </Row>
    </Col>
  )
}

export default FileUploadForm
