import { SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import { Row } from '../../../packages/react-chakra-ui/components'
import InputField from '../../../packages/react-chakra-ui/components/Form/InputField'

const GDriveAccountForm: React.FC = () => {
  return (
    <SimpleGrid gap={4}>
      <InputField name="email" label="E-mail" />
      <InputField name="client_id" label="Client ID" />
      <InputField name="client_secret" label="Client Secret" />
      <InputField name="refresh_token" label="Refresh Token" />
      <SimpleGrid columns={2} gap={4}>
        <Row />
        <Button rounded="sm" colorScheme="green" variant="ghost">
          Save Account
        </Button>
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default GDriveAccountForm
