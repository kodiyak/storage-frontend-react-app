import React, { useRef, useState } from 'react'
import SelectOptionsField from '../../../packages/react-chakra-ui/components/Form/SelectOptionsField'
import { FormProvider } from '../../../packages/react-chakra-ui/containers/FormProvider'
import FileFromMetadata from '../../Modules/File/FileFromMetadata'
import Modal from '../../../packages/react-chakra-ui/components/Modal'
import Row from '../../../packages/react-chakra-ui/components/Row/index'
import { SimpleGrid, Square, Button, useControllableState } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { FileIcon } from '../../../packages/react-chakra-ui/icons'
import { BoxOverlay } from '../../../packages/react-chakra-ui/components'
import FileUploadApi from '../../../services/api/FileUploadApi'
import { useDisclosure } from '../../../packages/react-chakra-ui/hooks'

const ModalGenerateHls: React.FC = () => {
  const { data } = useDisclosure('Modal.FileUpload.Hls')
  // const files = useRef<App.FileUpload.FisicalFile[]>(null)
  const [files, setFiles] = useState<App.FileUpload.FisicalFile[]>([])

  return (
    <Modal
      name="Modal.FileUpload.Hls"
      title="Generate HLS"
      _modal={{ isCentered: true }}
    >
      <FormProvider
        // onStart={() => {
        //   return {
        //     file: [0]
        //   }
        // }}
        onSubmit={(formData) => {
          if (data.fileUpload) {
            return FileUploadApi.runHlsProcess(data.fileUpload, formData)
          }
        }}
      >
        <SimpleGrid gap={4} mb={4}>
          <SelectOptionsField
            name="file"
            options={data.fileUpload?.mainFiles || []}
            onChange={(v) => {
              // console.log('value', v)
              // // @ts-ignore
              // files.current = v
              setFiles(() => v)
            }}
            render={({ value, toggle, isChecked }) => {
              return (
                <Row
                  alignItems="center"
                  cursor="pointer"
                  userSelect="none"
                  p={2}
                  rounded="lg"
                  bg={isChecked ? 'gray.900' : 'transparent'}
                  onClick={toggle}
                >
                  <Square
                    size={10}
                    rounded="md"
                    bg={isChecked ? 'primary.500' : 'gray.900'}
                  >
                    <FileIcon />
                  </Square>
                  <Text fontSize="sm" flex={1} pl={4} fontWeight="bold">
                    {value.fileName}
                  </Text>
                </Row>
              )
            }}
          />
        </SimpleGrid>
        <SimpleGrid
          columns={2}
          gap={2}
          mb={4}
          pos="relative"
          opacity={files?.length > 0 ? 1 : 0.4}
        >
          {files?.length <= 0 && <BoxOverlay />}
          <SelectOptionsField
            isMultiple
            name="sizes"
            options={[
              {
                name: 'HD',
                width: 1920,
                height: 1080
              },
              {
                name: '720p',
                width: 1280,
                height: 720
              },
              {
                name: '480p',
                width: 854,
                height: 480
              },
              {
                name: '360p',
                width: 640,
                height: 360
              }
            ]}
            render={({ value, toggle, isChecked }) => {
              return (
                <Row
                  alignItems="center"
                  cursor="pointer"
                  userSelect="none"
                  p={2}
                  rounded="lg"
                  bg={isChecked ? 'gray.900' : 'transparent'}
                  onClick={toggle}
                >
                  <Square
                    size={4}
                    rounded="md"
                    bg={isChecked ? 'primary.500' : 'gray.900'}
                  ></Square>
                  <Text fontSize="sm" flex={1} pl={4} fontWeight="bold">
                    {value.name}
                  </Text>
                </Row>
              )
            }}
          />
        </SimpleGrid>
        <Row mb={4}>
          <Row flex={1} />
          <Button
            variant="ghost"
            rounded="lg"
            colorScheme="primary"
            type="submit"
            isDisabled={files?.length <= 0}
          >
            Generate
          </Button>
        </Row>
      </FormProvider>
    </Modal>
  )
}

export default ModalGenerateHls
