import React, { useState } from 'react'
import { FileTree, Row } from '../../../packages/react-chakra-ui'
import Modal from '../../Ux/Modal'
import { useDisclosure } from '../../../hooks/useDisclosure'
import { drive_v3 } from 'googleapis'
import { Button } from '@chakra-ui/react'

const ModalPickGDriveFolder: React.FC = () => {
  const { data } = useDisclosure('Modal.GDrive.FolderPicker')

  const [folderPicked, setFolder] = useState<drive_v3.Schema$File>()

  return (
    <Modal
      name="Modal.GDrive.FolderPicker"
      title="Pick Folder"
      _modal={{ size: 'xl' }}
      _content={{ rounded: '2xl', bg: 'gray.800' }}
      _footer={{
        children: (
          <Row>
            <Button
              ml="auto"
              colorScheme="primary"
              variant="ghost"
              isDisabled={!folderPicked}
              onClick={() => {
                folderPicked && data.onSelect?.(folderPicked)
                setFolder(() => undefined)
              }}
            >
              Select Folder
            </Button>
          </Row>
        )
      }}
    >
      <FileTree.Tree>
        {data.gDriveAuth?.folders?.map((folder, keyFolder) => (
          <FileTree.Folder
            key={`folder${keyFolder}`}
            name={folder.name || ''}
            color={folder.id === folderPicked?.id ? 'GrayText' : ''}
            onClick={() => setFolder(folder)}
          />
        ))}
      </FileTree.Tree>
    </Modal>
  )
}

export default ModalPickGDriveFolder
