import { MenuItem, Avatar, Badge } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import DropdownOptionsField from '../../../../packages/react-chakra-ui/components/Form/DropdownOptionsField'
import GDriveAuthCollection from '../../../../services/collections/GDriveAuthCollection'
import { Col, Row, TextMini } from '../../../../packages/react-chakra-ui/components'
import GDriveAuthCard from '../../../Modules/GDriveAuth/GDriveAuthCard/index'
import { useCollection } from '../../../../packages/react-chakra-ui/hooks'

interface GDriveAuthPickerProps {
  onChange?: (gDriveAuth: App.GDriveAuth) => void
}

const GDriveAuthPicker: React.FC<GDriveAuthPickerProps> = ({ onChange }) => {
  const { data } = useCollection(GDriveAuthCollection)

  return (
    <>
      <DropdownOptionsField
        name="gdrive_auths"
        options={data}
        onChange={([value]) => onChange?.(value)}
        render={({ value, toggle, isChecked }) => {
          return (
            <MenuItem
              onClick={toggle}
              bg={isChecked ? 'green.600' : ''}
              _hover={{ bg: isChecked ? 'green.600' : '' }}
            >
              <Row alignItems="center">
                <Avatar src={value.about?.user?.photoLink} />
                <Col flex={1} pl={4}>
                  <TextMini>{value.email}</TextMini>
                  <Row mt={2}>
                    {value.gdrive_infos && <Badge colorScheme="green">Active</Badge>}
                  </Row>
                </Col>
              </Row>
            </MenuItem>
          )
        }}
      >
        {({ items: [item] }) => {
          const Component = () => (
            <GDriveAuthCard gDriveAuth={item} bg="gray.700" shadow="none" />
          )
          return (
            <Col p={item ? 0 : 4} rounded="lg" bg="gray.700">
              {!item ? <TextMini>Selecione uma conta</TextMini> : <Component />}
            </Col>
          )
        }}
      </DropdownOptionsField>
    </>
  )
}

export default GDriveAuthPicker
