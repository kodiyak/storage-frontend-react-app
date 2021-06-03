import { SimpleGrid, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Col, Row, TextMini } from '../../../packages/react-chakra-ui'
import SelectOptionsField from '../../../packages/react-chakra-ui/src/components/Form/SelectOptionsField'
import UploadFileFromPicker from '../Helpers/UploadFileFromPicker/index'
import InputField from '../../../packages/react-chakra-ui/src/components/Form/InputField'
import BoxFileField from '../../../packages/react-chakra-ui/src/components/Form/BoxFileField'
import UploadFileToPicker from '../Helpers/UploadFileToPicker/index'
import {
  ExternalLinkIcon,
  FilePlusIcon,
  TorrentIcon
} from '../../../packages/react-chakra-ui/src/icons'

const UploadFileForm: React.FC = () => {
  const [from, setFrom] = useState<any>()

  return (
    <SimpleGrid gap={4}>
      <Heading size="md">Pick File</Heading>
      <SimpleGrid columns={4} gap={4}>
        <UploadFileFromPicker onChange={setFrom} />
      </SimpleGrid>
      {from?.id === 'torrent' && (
        <InputField name="magnet_link" label="Magnet Link" />
      )}
      {from?.id === 'url' && <InputField name="url_download" label="URL" />}
      {from?.id === 'localFile' && (
        <BoxFileField
          name="file"
          cursor="pointer"
          bg="gray.800"
          rounded="sm"
          border="2px dashed transparent"
          borderColor="gray.700"
          p={4}
          render={({ files }) => {
            const hasFiles = files && files.length > 0
            return (
              <TextMini color={hasFiles ? 'green.400' : ''}>
                {hasFiles ? `${files?.length} files picked` : 'Pick a file'}
              </TextMini>
            )
          }}
        />
      )}
      <Heading mt={8} size="md">
        Upload in...
      </Heading>
      <SimpleGrid columns={4} gap={4}>
        <UploadFileToPicker />
      </SimpleGrid>
      From - {from?.id}
    </SimpleGrid>
  )
}

export default UploadFileForm
