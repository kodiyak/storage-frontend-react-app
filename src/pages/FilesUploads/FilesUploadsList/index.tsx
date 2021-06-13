import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import DefaultPage from '../../../components/MasterPages/DefaultPage'
import SidebarLeftFileUpload from '../../../components/MasterPages/Sidebars/SidebarLeftFileUpload'
import { Col } from '../../../packages/react-chakra-ui/components'
import FileUploadCollection from '../../../services/collections/FileUploadCollection'
import FileUploadCard from '../../../components/Modules/FileUpload/FileUploadCard/index'
import { useCollection } from '../../../packages/react-chakra-ui/hooks'

const FilesUploadsList: React.FC = () => {
  const { data } = useCollection(FileUploadCollection)

  return (
    <DefaultPage title="Files Uploads" SidebarLeft={<SidebarLeftFileUpload />}>
      <Col>
        <SimpleGrid columns={4} gap={4}>
          {data.map((fileUpload) => (
            <FileUploadCard
              key={`fileUpload${fileUpload.id}`}
              fileUpload={fileUpload}
            />
          ))}
        </SimpleGrid>
      </Col>
    </DefaultPage>
  )
}

export default FilesUploadsList
