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

const UploadFileFromPicker: React.FC<Partial<SelectOptionsFieldProps>> = ({
  ...rest
}) => {
  return (
    <SelectOptionsField
      index="id"
      label="label"
      name="from_type"
      options={[
        {
          id: 'url',
          label: {
            icon: <ExternalLinkIcon />,
            name: 'URL'
          }
        },
        {
          id: 'localFile',
          label: {
            icon: <FilePlusIcon />,
            name: 'Local File'
          }
        },
        {
          id: 'torrent',
          label: {
            icon: <TorrentIcon />,
            name: 'Torrent'
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
              {label.icon}
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

export default UploadFileFromPicker
