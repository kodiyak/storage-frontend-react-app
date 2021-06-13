import React from 'react'
import { Col, Row } from '../../packages/react-chakra-ui/components'
import { FormProvider } from '../../packages/react-chakra-ui/containers/FormProvider'
import DefaultPage from '../../components/MasterPages/DefaultPage/index'
import { PlusIcon, UploadIcon } from '../../packages/react-chakra-ui/icons'
import CardTitle from '../../components/Ux/CardTitle/index'
import GDriveAccountForm from '../../components/Forms/GDriveAccountForm'
import UploadFileForm from '../../components/Forms/UploadFileForm/index'
import { Button } from '@chakra-ui/react'
import FileUploadApi from '../../services/api/FileUploadApi'

const Dashboard: React.FC = () => {
  return (
    <DefaultPage title="Dashboard">
      <Col maxW={'80%'}>
        <CardTitle icon={<UploadIcon />} title="Upload New File">
          <FormProvider
            onSubmit={(data) => {
              return FileUploadApi.create(data)
            }}
          >
            <UploadFileForm />
            <Row mt={4}>
              <Button
                ml="auto"
                variant="ghost"
                rounded="sm"
                colorScheme="primary"
                px={8}
                type="submit"
              >
                Upload
              </Button>
            </Row>
          </FormProvider>
        </CardTitle>
        {/* <CardTitle icon={<PlusIcon />} title="Create GDrive Account">
          <FormProvider>
            <GDriveAccountForm />
          </FormProvider>
        </CardTitle> */}
      </Col>
    </DefaultPage>
  )
}

export default Dashboard
