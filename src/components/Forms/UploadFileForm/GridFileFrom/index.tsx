import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import FileFromMetadata from '../../../Modules/File/FileFromMetadata'

interface GridFileFromProps {
  files: App.Upload.FileFrom[]
}

const GridFileFrom: React.FC<GridFileFromProps> = ({ files }) => {
  return (
    <SimpleGrid gap={2} columns={2}>
      {files.map((file, keyFile) => (
        <FileFromMetadata key={`file${keyFile}`} file={file} />
      ))}
    </SimpleGrid>
  )
}

export default GridFileFrom
