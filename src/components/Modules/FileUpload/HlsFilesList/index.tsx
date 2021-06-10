import { Square, Heading, Badge, Button } from '@chakra-ui/react'
import React from 'react'
import { BoxScrollMini, Col, Row } from '../../../../packages/react-chakra-ui'
import { PlayIcon } from '../../../../packages/react-chakra-ui/src/icons'
import { Text } from '@chakra-ui/layout'

interface HlsFilesListProps {
  fileUpload: App.FileUpload.Main
}

const HlsFilesList: React.FC<HlsFilesListProps> = ({ fileUpload }) => {
  return (
    <>
      <Row p={4}>
        <Heading size="md">Hls Files</Heading>
      </Row>
      <Col h={400}>
        {fileUpload.hlsFiles && fileUpload.hlsFiles.length <= 0 && (
          <Col h="100%" w="100%" alignItems="center" justifyContent="center">
            <Button variant="ghost" colorScheme="primary" rounded="sm">
              Process first HLS
            </Button>
          </Col>
        )}
        <BoxScrollMini color="primary.500">
          {fileUpload.hlsFiles?.map((hls) => (
            <Col key={`hls${hls.id}`}>
              <Row alignItems="center" role="group" px={4}>
                <Square
                  size={10}
                  rounded="lg"
                  bg="gray.700"
                  fontSize="3xl"
                  _groupHover={{ bg: 'primary.500' }}
                >
                  <PlayIcon />
                </Square>
                <Col pl={4} flex={1}>
                  <Heading size="sm" cursor="default">
                    {hls.path}
                  </Heading>
                </Col>
              </Row>
              {hls.segments.map((segment) => (
                <Row
                  key={`segment${segment.id}`}
                  color="GrayText"
                  py={2}
                  px={4}
                  cursor="default"
                  _hover={{ color: 'white' }}
                >
                  <Text fontSize="sm" flex={1}>
                    {segment.local_path}
                  </Text>
                  <Badge colorScheme="primary">{segment.order}</Badge>
                </Row>
              ))}
            </Col>
          ))}
        </BoxScrollMini>
      </Col>
    </>
  )
}

export default HlsFilesList
