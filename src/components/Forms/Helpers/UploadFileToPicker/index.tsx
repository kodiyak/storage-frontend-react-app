import React from 'react'
import { Col, Row, TextMini } from '../../../../packages/react-chakra-ui'
import SelectOptionsField, {
  SelectOptionsFieldProps
} from '../../../../packages/react-chakra-ui/src/components/Form/SelectOptionsField'
import {
  ExternalLinkIcon,
  FilePlusIcon,
  TorrentIcon
} from '../../../../packages/react-chakra-ui/src/icons'

import GDriveIcon from '../../../../assets/img/gdrive.png'
import HdIcon from '../../../../assets/img/hd.png'
import { Image } from '@chakra-ui/react'

const UploadFileToPicker: React.FC<Partial<SelectOptionsFieldProps>> = ({
  ...rest
}) => {
  return (
    <SelectOptionsField
      index="id"
      label="label"
      name="from_type"
      options={[
        {
          id: 'server',
          label: {
            image: HdIcon,
            name: 'Server'
          }
        },
        {
          id: 'gdrive',
          label: {
            image: GDriveIcon,
            name: 'Google Drive'
          }
        }
      ]}
      render={({ label, toggle, isChecked }) => {
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
              <Image maxH={14} w="100%" objectFit="contain" src={label.image} />
            </Row>
            <TextMini px={4} pb={2}>
              {label.name}
            </TextMini>
          </Col>
        )
      }}
      {...rest}
    />
  )
}

export default UploadFileToPicker
