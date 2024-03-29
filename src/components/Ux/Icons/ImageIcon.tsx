import React, { useMemo } from 'react'
import { ImageProps, Image } from '@chakra-ui/react'

import GDriveIcon from '../../../assets/img/gdrive.png'
import GPhotosIcon from '../../../assets/img/gphotos.png'
import HdIcon from '../../../assets/img/hd.png'
import YoutubeIcon from '../../../assets/img/youtube.png'
import HLSIcon from '../../../assets/img/hls.png'

interface ImageIconProps extends ImageProps {
  name: App.FileUpload.Main['to']
}

const ImageIcon: React.FC<ImageIconProps> = ({ name, ...rest }) => {
  const srcImage = useMemo(() => {
    switch (name) {
      case 'gdrive':
        return GDriveIcon

      case 'gphotos':
        return GPhotosIcon

      case 'server':
        return HdIcon

      case 'youtube':
        return YoutubeIcon

      case 'hls':
        return HLSIcon

      default:
        return HdIcon
    }
  }, [name])

  return <Image w="100%" h="100%" objectFit="contain" src={srcImage} {...rest} />
}

export default ImageIcon
