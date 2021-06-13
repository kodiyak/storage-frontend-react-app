import { Checkbox, Heading, Input, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  Col,
  FileSize,
  Row,
  TextMini
} from '../../../../packages/react-chakra-ui/components'
import { Text } from '@chakra-ui/layout'

interface FileFromMetadataProps {
  file: App.Upload.FileFrom
  onChange?: (isChecked: boolean) => void
  isChecked?: boolean
}

const FileFromMetadata: React.FC<FileFromMetadataProps> = ({
  file,
  isChecked = false,
  onChange
}) => {
  return (
    <Col
      rounded="md"
      shadow="sm"
      bg="gray.800"
      border="2px solid transparent"
      borderColor={isChecked ? 'green.500' : ''}
    >
      <Row h={10} alignItems="center" px={2}>
        <Row flex={1} overflowX="hidden">
          <Heading size="xs" userSelect="none" color={isChecked ? 'green.400' : ''}>
            {file.fileName}
          </Heading>
        </Row>
        <Checkbox
          ml={2}
          isChecked={isChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          colorScheme="green"
        />
      </Row>
      <SimpleGrid gap={2} pb={2}>
        <Col px={2}>
          <TextMini>File Name</TextMini>
          <Text fontSize="xs" mt={1}>
            {file.fileName}
          </Text>
        </Col>
        <SimpleGrid gap={2} columns={2}>
          <Col px={2}>
            <TextMini>File Size</TextMini>
            <Text fontSize="xs" mt={1}>
              <FileSize sizeFormat="GB">{file.size}</FileSize> GB
            </Text>
          </Col>
          <Col px={2}>
            <TextMini>Mime-Type</TextMini>
            <Text fontSize="xs" mt={1}>
              {file.mimeType}
            </Text>
          </Col>
        </SimpleGrid>
        <Col px={2}>
          <TextMini>Url</TextMini>
          <Input
            size="xs"
            value={file.url || ''}
            readOnly
            focusBorderColor="green.500"
          />
        </Col>
      </SimpleGrid>
    </Col>
  )
}

export default FileFromMetadata
