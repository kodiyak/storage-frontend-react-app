import React from 'react'
import { Col } from '../../packages/react-chakra-ui'
import { FormProvider } from '../../packages/react-chakra-ui/src/containers/FormProvider'
import DefaultPage from '../../components/MasterPages/DefaultPage/index'
import { PlusIcon, UploadIcon } from '../../packages/react-chakra-ui/src/icons'
import CardTitle from '../../components/Ux/CardTitle/index'
import GDriveAccountForm from '../../components/Forms/GDriveAccountForm'
import UploadFileForm from '../../components/Forms/UploadFileForm/index'

const Dashboard: React.FC = () => {
  return (
    <DefaultPage title="Dashboard">
      <Col maxW={800}>
        <CardTitle icon={<UploadIcon />} title="Upload New File">
          <FormProvider>
            <UploadFileForm />
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
