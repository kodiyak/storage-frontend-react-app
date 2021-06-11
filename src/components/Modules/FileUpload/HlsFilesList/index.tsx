import { Square, Heading, Badge, Button } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { BoxScrollMini, Col, Row } from '../../../../packages/react-chakra-ui'
import { PlayIcon } from '../../../../packages/react-chakra-ui/src/icons'
import { Text } from '@chakra-ui/layout'
import BoxOverlay from '../../../../packages/react-chakra-ui/src/components/BoxOverlay/index'
import { useDisclosure } from '../../../../hooks/useDisclosure'
import M3u8Row from './M3u8Row'

interface HlsFilesListProps {
  fileUpload: App.FileUpload.Main
}

const HlsFilesList: React.FC<HlsFilesListProps> = ({ fileUpload }) => {
  const canGenerateHls = useMemo(() => {
    return fileUpload.mime_type.startsWith('video/')
  }, [fileUpload.mime_type])

  const { onOpen } = useDisclosure('Modal.FileUpload.Hls')

  return (
    <>
      <Col pos="relative" opacity={canGenerateHls ? 1 : 0.4}>
        {!canGenerateHls && <BoxOverlay />}
        <Row p={4} alignItems="center">
          <Heading size="md" flex={1}>
            Hls Files
          </Heading>
          {fileUpload.hlsFiles && fileUpload.hlsFiles.length > 0 && (
            <Button
              variant="ghost"
              colorScheme="primary"
              rounded="sm"
              onClick={() => onOpen({ fileUpload })}
            >
              Process HLS
            </Button>
          )}
        </Row>
        <Col h={400}>
          {fileUpload.hlsFiles && fileUpload.hlsFiles.length <= 0 && (
            <Col h="100%" w="100%" alignItems="center" justifyContent="center">
              <Button
                variant="ghost"
                colorScheme="primary"
                rounded="sm"
                onClick={() => onOpen({ fileUpload })}
              >
                Process first HLS
              </Button>
            </Col>
          )}
          <BoxScrollMini color="primary.500">
            {fileUpload.hlsFiles?.map((hls) => (
              <M3u8Row key={`hls${hls.id}`} hls={hls} fileUpload={fileUpload} />
            ))}
          </BoxScrollMini>
        </Col>
      </Col>
    </>
  )
}

export default HlsFilesList
