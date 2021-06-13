import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DefaultPage from '../../../components/MasterPages/DefaultPage'
import FileUploadCollection from '../../../services/collections/FileUploadCollection'
import {
  Button,
  CircularProgress,
  Heading,
  SimpleGrid,
  Square
} from '@chakra-ui/react'
import {
  FileIcon,
  InfoCircleIcon,
  PlayIcon
} from '../../../packages/react-chakra-ui/icons'
import {
  Col,
  Row,
  FileSize,
  TextMini,
  FileTree
} from '../../../packages/react-chakra-ui/components'
import { Text } from '@chakra-ui/layout'
import ImageIcon from '../../../components/Ux/Icons/ImageIcon'
import FileProgress from '../../../components/Modules/File/FileProgress/index'
import FileUploadApi from '../../../services/api/FileUploadApi'
import LoadingPage from '../../../components/MasterPages/LoadingPage'
import HlsFilesList from '../../../components/Modules/FileUpload/HlsFilesList'
import TmpFilesList from '../../../components/Modules/FileUpload/TmpFilesList'
import FileCircularProgress from '../../../components/Modules/File/FileCircularProgress'
import { useCollection } from '../../../packages/react-chakra-ui/hooks'
import { Str } from '../../../packages/react-chakra-ui/helpers'

const FileUploadShow: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: [fileUpload]
  } = useCollection(FileUploadCollection, (collection) =>
    collection.where('id', Number(id)).all()
  )

  useEffect(() => {
    console.log('file', fileUpload)
    if (fileUpload && fileUpload.tmpFiles === undefined) {
      FileUploadApi.getTmpFiles(fileUpload)
    }
    if (fileUpload && fileUpload.hlsFiles === undefined) {
      FileUploadApi.getHlsFiles(fileUpload)
    }
    if (fileUpload && fileUpload.mainFiles === undefined) {
      FileUploadApi.getMainFiles(fileUpload)
    }
  }, [fileUpload])

  if (!fileUpload) return <LoadingPage />

  return (
    <DefaultPage
      title={`#${fileUpload.id}: ${Str.truncate(fileUpload.file_name, 50)}`}
    >
      <Col>
        <SimpleGrid gap={4} mb={8}>
          <Col>
            <TextMini>Youtube</TextMini>
            <Row>
              <FileCircularProgress
                name="Upload/Youtube"
                color="red.500"
                fileUpload={fileUpload}
                p={4}
              >
                <ImageIcon name="youtube" objectFit="contain" />
              </FileCircularProgress>
              <Row flex={1} pl={4}>
                <Col>
                  <Heading size="md">File ID</Heading>
                  <Text fontSize="sm">{fileUpload.g_drive_file_id}</Text>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col>
            <TextMini>Temporary File</TextMini>
            <Row>
              <FileCircularProgress
                name="Upload/GDrive"
                color="yellow.500"
                fileUpload={fileUpload}
                p={4}
              >
                <ImageIcon name="server" objectFit="contain" />
              </FileCircularProgress>
              <Row flex={1} pl={4} alignItems="center">
                <Col flex={1}>
                  <Heading size="xs">Mime-Type</Heading>
                  <Text fontSize="sm">{fileUpload.mime_type}</Text>
                </Col>
                <Col flex={1}>
                  <Heading size="xs">File Size</Heading>
                  <Text fontSize="sm">
                    <FileSize sizeFormat="MB">{fileUpload.file_size}</FileSize> MB
                  </Text>
                </Col>
                <Col flex={1}>
                  <Heading size="xs">Temp. Path</Heading>
                  <Text fontSize="sm">{fileUpload.tmp_path}</Text>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col>
            <TextMini>Google Drive</TextMini>
            <Row>
              <FileCircularProgress
                name="Upload/GDrive"
                color="green.500"
                fileUpload={fileUpload}
                p={4}
              >
                <ImageIcon name="gdrive" rounded="50%" objectFit="contain" />
              </FileCircularProgress>
              <Row flex={1} pl={4} alignItems="center">
                <Col flex={1}>
                  <Heading size="xs">File ID</Heading>
                  <Text fontSize="sm">{fileUpload.g_drive_file_id}</Text>
                </Col>
                <Col flex={1}>
                  <Heading size="xs">Folder ID</Heading>
                  <Text fontSize="sm">{fileUpload.g_drive_folder_id}</Text>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col>
            <TextMini>Google Photos</TextMini>
            <FileCircularProgress
              name="Upload/GPhotos"
              color="blue.500"
              fileUpload={fileUpload}
              p={4}
            >
              <ImageIcon name="gphotos" rounded="50%" objectFit="contain" />
            </FileCircularProgress>
          </Col>
          <Col>
            <TextMini>Process HLS</TextMini>
            <FileCircularProgress
              name="Process/HLS"
              color="blue.500"
              fileUpload={fileUpload}
              p={4}
            >
              <ImageIcon name="hls" objectFit="contain" />
            </FileCircularProgress>
          </Col>
        </SimpleGrid>
        <SimpleGrid gap={4} columns={4} mb={4}>
          {fileUpload.mainFiles?.map((mainFile) => (
            <Col p={2} rounded="lg" key={`mainFile${mainFile.fileName}`}>
              <Row alignItems="center" role="group">
                <Square
                  size={14}
                  rounded="xl"
                  bg="gray.700"
                  fontSize="2xl"
                  _groupHover={{ bg: 'primary.500' }}
                >
                  <FileIcon />
                </Square>
                <Col
                  flex={1}
                  pl={4}
                  fontSize="sm"
                  cursor="default"
                  fontWeight="bold"
                >
                  {mainFile.fileName}
                </Col>
              </Row>
            </Col>
          ))}
        </SimpleGrid>
        <SimpleGrid gap={4} columns={2} mb={4}>
          <Col
            rounded="lg"
            bg="gray.900"
            border="4px solid transparent"
            _hover={{ borderColor: 'primary.500' }}
          >
            <TmpFilesList fileUpload={fileUpload} />
          </Col>
          <Col
            rounded="lg"
            bg="gray.900"
            border="4px solid transparent"
            _hover={{ borderColor: 'primary.500' }}
          >
            <HlsFilesList fileUpload={fileUpload} />
          </Col>
        </SimpleGrid>
      </Col>
    </DefaultPage>
  )
}

export default FileUploadShow
