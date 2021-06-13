import {
  Square,
  Heading,
  Badge,
  useDisclosure,
  IconButton,
  Button
} from '@chakra-ui/react'
import React from 'react'
import { Col, Row } from '../../../../../packages/react-chakra-ui/components'
import { DownIcon, PlayIcon } from '../../../../../packages/react-chakra-ui/icons'
import { Text } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import ImageIcon from '../../../../Ux/Icons/ImageIcon'

interface M3u8RowProps {
  fileUpload: App.FileUpload.Main
  hls: App.Hls.M3u8
}

const M3u8Row: React.FC<M3u8RowProps> = ({ fileUpload, hls }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Col key={`hls${hls.id}`} py={2}>
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
          <Col pl={4}>
            <Heading size="sm" cursor="default">
              {hls.id}
            </Heading>
          </Col>
          <Col pl={4} flex={1}>
            <Heading size="sm" cursor="default">
              {hls.path}
            </Heading>
          </Col>
          <IconButton size="sm" aria-label="GPhotos Upload" mr={2}>
            <ImageIcon name="gphotos" w={5} h={5} objectFit="contain" />
          </IconButton>
          <IconButton size="sm" aria-label="GDrive Upload" mr={2}>
            <ImageIcon name="gdrive" w={5} h={5} objectFit="contain" />
          </IconButton>
          <IconButton
            size="sm"
            aria-label="Toggle Hls Files"
            onClick={onToggle}
            transition="all .2s ease-in-out"
            rounded="50%"
            transform={`rotate(${isOpen ? '180deg' : '0'})`}
          >
            <DownIcon />
          </IconButton>
        </Row>
        <Collapse in={isOpen}>
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
        </Collapse>
      </Col>
    </>
  )
}

export default M3u8Row
