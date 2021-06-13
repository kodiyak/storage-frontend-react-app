import { Heading, SimpleGrid, Square } from '@chakra-ui/react'
import React from 'react'
import {
  Row,
  Col,
  TextMini,
  FileSize,
  SlideLeftGroupHover
} from '../../../../packages/react-chakra-ui/components'
import { FileIcon, RightIcon } from '../../../../packages/react-chakra-ui/icons'
import ImageIcon from '../../../Ux/Icons/ImageIcon'
import { Text } from '@chakra-ui/layout'
import GDriveAvatar from '../../GDriveAuth/GDriveAvatar/index'
import { Link } from 'react-router-dom'
import { Str } from '../../../../packages/react-chakra-ui/helpers'

interface FileUploadCardProps {
  fileUpload: App.FileUpload.Main
}

const FileUploadCard: React.FC<FileUploadCardProps> = ({ fileUpload }) => {
  return (
    <Col p={4} bg="gray.900" rounded="md" role="group">
      <Row alignItems="center" mb={2}>
        <Row flex={1}>
          <Heading size="md">{Str.truncate(fileUpload.file_name, 20)}</Heading>
        </Row>
        <Link to={`/file/${fileUpload.id}`}>
          <SlideLeftGroupHover transition="all .2s ease-in-out">
            <Row alignItems="center">
              <TextMini mr={4}>Details</TextMini>
              <RightIcon />
            </Row>
          </SlideLeftGroupHover>
        </Link>
      </Row>
      <Row>
        <Square size={10} rounded="lg" bg="gray.800">
          <FileIcon />
        </Square>
        <Col flex={1} pl={4}>
          <SimpleGrid gap={2} mt={2}>
            <Col>
              <TextMini>Mime Type</TextMini>
              <Text fontSize="xs">{fileUpload.mime_type}</Text>
            </Col>
            <Col>
              <TextMini>File Size</TextMini>
              <Text fontSize="xs">
                <FileSize sizeFormat="MB">{fileUpload.file_size}</FileSize> MB
              </Text>
            </Col>
          </SimpleGrid>
        </Col>
      </Row>
      <Row mt={2}>
        <Square size={10} p={2} rounded="lg" bg="gray.800">
          <ImageIcon name="gdrive" w="100%" h="100%" objectFit="contain" />
        </Square>
        <Col flex={1} pl={4}>
          <SimpleGrid gap={2}>
            <Col>
              <TextMini>File ID</TextMini>
              <Text fontSize="xs">{fileUpload.g_drive_file_id}</Text>
            </Col>
            <Col>
              <TextMini>Folder ID</TextMini>
              <Text fontSize="xs">{fileUpload.g_drive_folder_id}</Text>
            </Col>
            {fileUpload.g_drive_auth_id && (
              <Row alignItems="center">
                <TextMini flex={1}>Google Account</TextMini>

                <Row>
                  <GDriveAvatar
                    gDriveAuthId={fileUpload.g_drive_auth_id}
                    size="sm"
                    mr="auto"
                  />
                </Row>
              </Row>
            )}
          </SimpleGrid>
        </Col>
      </Row>
      <Row mt={2}>
        <Square size={10} p={2} rounded="lg" bg="gray.800">
          <ImageIcon name="server" w="100%" h="100%" objectFit="contain" />
        </Square>
        <Col flex={1} pl={4}>
          <SimpleGrid gap={2}>
            <Col>
              <TextMini>Temp. Path</TextMini>
              <Text fontSize="xs">{fileUpload.tmp_path}</Text>
            </Col>
            <Col>
              <TextMini>Temp. Path</TextMini>
              <Text fontSize="xs">{fileUpload.tmp_path}</Text>
            </Col>
          </SimpleGrid>
        </Col>
      </Row>
      <Row mt={2}>
        <Square size={10} p={2} rounded="lg" bg="gray.800">
          <ImageIcon name="gphotos" w="100%" h="100%" objectFit="contain" />
        </Square>
        <Col flex={1} pl={4}>
          <SimpleGrid gap={2}>
            <Col>
              <TextMini>File ID</TextMini>
              <Text fontSize="xs">{fileUpload.g_photos_file_id}</Text>
            </Col>
            <Col>
              <TextMini>Album ID</TextMini>
              <Text fontSize="xs">{fileUpload.g_photos_album_id}</Text>
            </Col>
          </SimpleGrid>
        </Col>
      </Row>
      <Row mt={2}>
        <Square size={10} p={2} rounded="lg" bg="gray.800">
          <ImageIcon name="youtube" w="100%" h="100%" objectFit="contain" />
        </Square>
        <Col flex={1} pl={4}>
          <SimpleGrid gap={2}>
            <Col>
              <TextMini>Youtube ID</TextMini>
              <Text fontSize="xs">{fileUpload.g_youtube_file_id}</Text>
            </Col>
          </SimpleGrid>
        </Col>
      </Row>
    </Col>
  )
}

export default FileUploadCard
