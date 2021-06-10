import { Heading } from '@chakra-ui/react'
import React from 'react'
import {
  Row,
  Col,
  BoxScrollMini,
  FileTree
} from '../../../../packages/react-chakra-ui'

interface TmpFilesListProps {
  fileUpload: App.FileUpload.Main
}

const TmpFilesList: React.FC<TmpFilesListProps> = ({ fileUpload }) => {
  return (
    <>
      <Row p={4}>
        <Heading size="md">Disk Files</Heading>
      </Row>
      <Col h={400}>
        <BoxScrollMini color="primary.500">
          <FileTree.Tree>
            {fileUpload.tmpFiles?.map((file) => (
              <React.Fragment key={`file${file.name}`}>
                {file.type === 'dir' && <FileTree.Folder name={file.fileName} />}
                {file.type === 'file' && <FileTree.File name={file.fileName} />}
              </React.Fragment>
            ))}
          </FileTree.Tree>
        </BoxScrollMini>
      </Col>
    </>
  )
}

export default TmpFilesList
