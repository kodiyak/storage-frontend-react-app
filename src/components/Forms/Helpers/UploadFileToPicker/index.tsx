import React from 'react'
import { Col, Row, TextMini } from '../../../../packages/react-chakra-ui/components'
import SelectOptionsField, {
  SelectOptionsFieldProps
} from '../../../../packages/react-chakra-ui/components/Form/SelectOptionsField'
import {
  ExternalLinkIcon,
  FilePlusIcon,
  TorrentIcon
} from '../../../../packages/react-chakra-ui/icons'

import GDriveIcon from '../../../../assets/img/gdrive.png'
import GPhotosIcon from '../../../../assets/img/gphotos.png'
import HdIcon from '../../../../assets/img/hd.png'
import YoutubeIcon from '../../../../assets/img/youtube.png'
import { Image } from '@chakra-ui/react'

const UploadFileToPicker: React.FC<Partial<SelectOptionsFieldProps>> = ({
  onChange,
  ...rest
}) => {
  return (
    <SelectOptionsField
      name="to_type"
      options={[
        {
          id: 'server',
          image: HdIcon,
          name: 'Server'
        },
        {
          id: 'gdrive',
          image: GDriveIcon,
          name: 'Google Drive'
        },
        {
          id: 'gphotos',
          image: GPhotosIcon,
          name: 'Google Photos'
        },
        {
          id: 'youtube',
          image: YoutubeIcon,
          name: 'Youtube'
        }
      ]}
      onChange={([v]) => onChange?.(v?.id)}
      render={({ value, toggle, isChecked }) => {
        return (
          <Col
            h={32}
            border="2px solid transparent"
            bg={isChecked ? 'gray.800' : 'transparent'}
            borderColor={isChecked ? 'gray.800' : 'transparent'}
            color={isChecked ? 'primary.500' : ''}
            rounded="sm"
            cursor="pointer"
            userSelect="none"
            onClick={toggle}
          >
            <Row flex={1} alignItems="center" justifyContent="center" fontSize="4xl">
              <Image maxH={14} w="100%" objectFit="contain" src={value.image} />
            </Row>
            <TextMini px={4} pb={2}>
              {value.name}
            </TextMini>
          </Col>
        )
      }}
      {...rest}
    />
  )
}

export default UploadFileToPicker
