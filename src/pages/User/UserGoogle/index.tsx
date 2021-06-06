import { Square, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import DefaultPage from '../../../components/MasterPages/DefaultPage'
import LoadingPage from '../../../components/MasterPages/LoadingPage'
import { useCollection } from '../../../hooks/useCollection'
import { FileTree } from '../../../packages/react-chakra-ui'
import GDriveAuthCollection from '../../../services/collections/GDriveAuthCollection'
import { useCollect } from '../../../hooks/useCollect'

const UserGoogle: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const {
    data: [user]
  } = useCollection(GDriveAuthCollection, (collection) =>
    collection.where('id', Number(id)).all()
  )

  const folders = useCollect(user.folders || [], (collection) =>
    collection.forPage(1, 200).all()
  )
  const files = useCollect(user.files || [], (collection) =>
    collection.where('ownedByMe', true).forPage(1, 200).all()
  )

  if (!user || !user.about?.user?.displayName) {
    return (
      <DefaultPage>
        <LoadingPage />
      </DefaultPage>
    )
  }

  return (
    <DefaultPage
      leftContent={
        <>
          {user.about?.user?.photoLink && (
            <Square size={16} rounded="lg" overflow="hidden" mr={4}>
              <Image
                src={user.about?.user?.photoLink || ''}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Square>
          )}
        </>
      }
      title={user.about?.user?.displayName && `${user.about?.user?.displayName}`}
      description="Google Drive Account"
    >
      {files.data.length > 0 && (
        <>
          <Heading size="md">Files</Heading>
          <FileTree.Tree>
            {files.data.map((file, keyFile) => (
              <FileTree.File name={file.name || ''} key={`fileUser${keyFile}`} />
            ))}
          </FileTree.Tree>
        </>
      )}
      {folders.data.length > 0 && (
        <>
          <Heading size="md">Folders</Heading>
          <FileTree.Tree>
            {folders.data.map((folder, keyFolder) => (
              <FileTree.Folder
                name={folder.name || ''}
                key={`folderUser${keyFolder}`}
              />
            ))}
          </FileTree.Tree>
        </>
      )}
    </DefaultPage>
  )
}

export default UserGoogle
