import { Heading, SimpleGrid, Square, Image, CloseButton } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import {
  BoxFile,
  Col,
  Row,
  TextMini
} from '../../../../packages/react-chakra-ui/components'
import SidebarFileUploadItem from './SidebarFileUploadItem/index'
import { UploadFileChannel } from '../../../../services/socket/upload/UploadFileChannel'
import FileUploadCollection from '../../../../services/collections/FileUploadCollection'
import BoxScrollMini from '../../../../packages/react-chakra-ui/components/BoxScrollMini/index'
import { useCollection } from '../../../../packages/react-chakra-ui/hooks'

const SidebarLeftDefault: React.FC = () => {
  const filesUploadQueue = useCollection(FileUploadCollection, (filesUploads) => {
    return filesUploads.whereIn('status_server_tmp', ['queued']).all()
  })
  const filesUploadUploading = useCollection(
    FileUploadCollection,
    (filesUploads) => {
      return filesUploads.whereIn('status_server_tmp', ['uploading']).all()
    }
  )
  const filesUploadProcessing = useCollection(
    FileUploadCollection,
    (filesUploads) => {
      return filesUploads.whereIn('status_server_tmp', ['processing']).all()
    }
  )

  return (
    <Col w={300} h="100%" bg="darken.100">
      <BoxScrollMini color="gray.600">
        <Col pl={2} pr={4}>
          <Row h={20} alignItems="center">
            <Square rounded="lg" bg="primary.500" size={16}></Square>
          </Row>
          <SimpleGrid gap={2}>
            <Heading size="xs">Queue</Heading>
            {filesUploadQueue.data.map((fileUpload) => (
              <SidebarFileUploadItem
                key={`fileUpload${fileUpload.id}`}
                fileUpload={fileUpload}
              />
            ))}
            <Heading size="xs" mt={4}>
              Uploading
            </Heading>
            {filesUploadUploading.data.map((fileUpload) => (
              <SidebarFileUploadItem
                key={`fileUpload${fileUpload.id}`}
                fileUpload={fileUpload}
              />
            ))}
            <Heading size="xs" mt={4}>
              Processing
            </Heading>
            {filesUploadProcessing.data.map((fileUpload) => (
              <SidebarFileUploadItem
                key={`fileUpload${fileUpload.id}`}
                fileUpload={fileUpload}
              />
            ))}
          </SimpleGrid>
        </Col>
      </BoxScrollMini>
    </Col>
  )
}

export default SidebarLeftDefault
