import { Heading, SimpleGrid, Square, Image } from '@chakra-ui/react'
import React from 'react'
import { BoxFile, Col, Row } from '../../../../packages/react-chakra-ui'
import SidebarFileUploadItem from './SidebarFileUploadItem/index'
import { UploadFileChannel } from '../../../../services/socket/upload/UploadFileChannel'
import { useCollection } from '../../../../hooks/useCollection'
import FileUploadCollection from '../../../../services/collections/FileUploadCollection'

const SidebarLeftDefault: React.FC = () => {
  const filesUpload = useCollection(FileUploadCollection)

  return (
    <Col w={300} h="100%" bg="darken.100" px={2}>
      <Row h={20} alignItems="center">
        <Square rounded="lg" bg="primary.500" size={16}></Square>
      </Row>
      <BoxFile
        w="100%"
        h={100}
        bg="gray.800"
        rounded="lg"
        input={{
          onChange: (e) => {
            // if (e.target.files && e.target.files.item(0) !== null) {
            //   const [file] = Array.from(e.target.files)
            //   const channel = new UploadFileChannel(file)
            //   channel.start()
            // }
          }
        }}
      />
      <SimpleGrid gap={2}>
        <Heading size="xs">Transfers</Heading>
        {filesUpload.data.map((fileUpload) => (
          <SidebarFileUploadItem
            key={`fileUpload${fileUpload.id}`}
            fileUpload={fileUpload}
          />
        ))}
      </SimpleGrid>
    </Col>
  )
}

export default SidebarLeftDefault
