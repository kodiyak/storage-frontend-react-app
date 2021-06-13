import React from 'react'
import { useFieldState } from '../../../../packages/react-chakra-ui/hooks/useFieldState'
import FileFromMetadata from '../../../Modules/File/FileFromMetadata/index'
import SelectOptionsField, {
  SelectOptionsFieldProps
} from '../../../../packages/react-chakra-ui/components/Form/SelectOptionsField'

interface FileFromMetadataPickerProps extends Partial<SelectOptionsFieldProps> {
  name: string
  files: App.Upload.FileFrom[]
}

const FileFromMetadataPicker: React.FC<FileFromMetadataPickerProps> = ({
  name,
  files,
  ...rest
}) => {
  return (
    <>
      <SelectOptionsField
        isMultiple
        name={name}
        options={files}
        render={({ value, toggle, isChecked }) => {
          return (
            <FileFromMetadata
              file={value}
              isChecked={isChecked}
              onChange={() => toggle()}
            />
          )
        }}
        {...rest}
      />
    </>
  )
}

export default FileFromMetadataPicker
