import { Avatar, Heading, SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import DefaultPage from '../../../components/MasterPages/DefaultPage'
import { Col, Row } from '../../../packages/react-chakra-ui'
import { useCollection } from '../../../hooks/useCollection'
import GDriveAuthCollection from '../../../services/collections/GDriveAuthCollection'
import GDriveAuthCard from '../../../components/Modules/GDriveAuth/GDriveAuthCard'

const UsersList: React.FC = () => {
  const { data } = useCollection(GDriveAuthCollection)

  return (
    <DefaultPage title="Users">
      <Col>
        <SimpleGrid gap={4} columns={3}>
          {data.map((gDriveAuth) => (
            <GDriveAuthCard
              key={`gDriveAuth${gDriveAuth.id}`}
              gDriveAuth={gDriveAuth}
              canReload
            />
          ))}
        </SimpleGrid>
      </Col>
    </DefaultPage>
  )
}

export default UsersList
