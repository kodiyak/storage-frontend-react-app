import { SimpleGrid, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Col, Row, TextMini } from '../../../packages/react-chakra-ui'
import UploadFileFromPicker from '../Helpers/UploadFileFromPicker'
import InputField from '../../../packages/react-chakra-ui/src/components/Form/InputField'
import BoxFileField from '../../../packages/react-chakra-ui/src/components/Form/BoxFileField'
import UploadFileToPicker from '../Helpers/UploadFileToPicker'
import GDriveAuthPicker from '../Helpers/GDriveAuthPicker'
import GridFileFrom from './GridFileFrom'

import TorrentApi from '../../../services/api/TorrentApi'
import UrlApi from '../../../services/api/UrlApi'
import FileFromMetadataPicker from '../Helpers/FileFromMetadataPicker'
import FileUploadForm from '../FileUploadForm'

const UploadFileForm: React.FC = () => {
  const [from, setFrom] = useState<any>()
  const [to, setTo] = useState<any>()

  const [magnet, setMagnet] = useState('')
  const [url, setUrl] = useState('')

  const [filesFrom, setFilesFrom] = useState<App.Upload.FileFrom[]>([])
  const [filesFromPicked, setFilesFromPicked] = useState<App.Upload.FileFrom[]>([])
  const [gDriveAuth, setGDriveAuth] = useState<App.GDriveAuth>()

  const onBlurMagnetLink = () => {
    if (magnet.length > 0) {
      setFilesFrom(() => [])
      TorrentApi.metadata(magnet).then(({ froms }) => {
        froms && setFilesFrom(() => froms)
      })
    }
  }

  const onBlurUrlLink = () => {
    if (url.length > 0) {
      setFilesFrom(() => [])
      UrlApi.metadata(url).then(({ from }) => {
        from && setFilesFrom(() => [from])
      })
    }
  }

  return (
    <SimpleGrid gap={4}>
      <Heading size="md">Pick File</Heading>
      <SimpleGrid columns={4} gap={4}>
        <UploadFileFromPicker name="from_type" onChange={setFrom} />
      </SimpleGrid>
      {from === 'torrent' && (
        <InputField
          name="magnet_link"
          label="Magnet Link"
          value={magnet}
          onChange={(e) => setMagnet(e.target.value)}
          onBlur={() => onBlurMagnetLink()}
        />
      )}
      {from === 'url' && (
        <InputField
          name="url_download"
          label="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onBlur={() => onBlurUrlLink()}
        />
      )}
      {from === 'localFile' && (
        <BoxFileField
          name="file"
          cursor="pointer"
          bg="gray.800"
          rounded="sm"
          border="2px dashed transparent"
          borderColor="gray.700"
          p={4}
          isMultiple
          render={({ files }) => {
            const hasFiles = files && files.length > 0
            return (
              <TextMini color={hasFiles ? 'green.400' : ''}>
                {hasFiles ? `${files?.length} files picked` : 'Pick a file'}
              </TextMini>
            )
          }}
          onChange={(files) => {
            setFilesFrom(() =>
              Array.from(files).map((file) => ({
                fileName: file.name,
                mimeType: file.type,
                size: file.size,
                file,
                url: `file://${file.name}`
              }))
            )
          }}
        />
      )}
      {filesFrom.length > 0 && (
        <SimpleGrid columns={2} gap={4} py={2}>
          <FileFromMetadataPicker
            name="files_picker"
            files={filesFrom}
            onChange={setFilesFromPicked}
          />
        </SimpleGrid>
      )}
      <Heading mt={8} size="md">
        Upload in...
      </Heading>
      <SimpleGrid columns={4} gap={4}>
        <UploadFileToPicker name="to_type" onChange={setTo} />
      </SimpleGrid>
      {(to === 'gdrive' || to === 'gphotos') && (
        <GDriveAuthPicker onChange={setGDriveAuth} />
      )}
      {gDriveAuth && filesFrom && filesFrom.length > 0 && from && to && (
        <>
          <SimpleGrid gap={4}>
            {filesFromPicked.map((fileFrom, keyFileFrom) => (
              <FileUploadForm
                name={`files_uploads[${keyFileFrom}]`}
                key={`fileUpload${gDriveAuth.id}${fileFrom.fileName}${from}${to}`}
                fileFrom={fileFrom}
                gDriveAuth={gDriveAuth}
                from={from}
                to={to}
              />
            ))}
          </SimpleGrid>
        </>
      )}
    </SimpleGrid>
  )
}

export default UploadFileForm
