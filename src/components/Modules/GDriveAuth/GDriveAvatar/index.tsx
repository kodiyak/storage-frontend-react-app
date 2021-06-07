import { Avatar, AvatarProps } from '@chakra-ui/react'
import React from 'react'
import { useCollection } from '../../../../hooks/useCollection'
import GDriveAuthCollection from '../../../../services/collections/GDriveAuthCollection'

interface GDriveAvatarProps extends AvatarProps {
  gDriveAuthId: number
}

const GDriveAvatar: React.FC<GDriveAvatarProps> = ({ gDriveAuthId, ...rest }) => {
  const {
    data: [gDriveAuth]
  } = useCollection(GDriveAuthCollection, (collection) =>
    collection.where('id', gDriveAuthId).all()
  )

  return (
    <Avatar
      src={gDriveAuth.about?.user?.photoLink || ''}
      name={gDriveAuth.about?.user?.displayName || ''}
      {...rest}
    />
  )
}

export default GDriveAvatar
