import { SimpleGrid, Square, Image, Circle } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Col,
  ContainerScreen,
  Row
} from '../../../packages/react-chakra-ui/components'
import {
  HomeIcon,
  UploadIcon,
  UsersIcon
} from '../../../packages/react-chakra-ui/icons'
import SquareButton from './src/SquareButton/index'
import LoadingLogo from './src/LoadingLogo'

const AdminMasterPage: React.FC = ({ children }) => {
  return (
    <ContainerScreen>
      <Row w="100%" h="100%">
        <Col h="100%" w={16} bg="gray.900" justifyContent="space-between">
          <Row justifyContent="center" mt={2}>
            <LoadingLogo />
          </Row>
          <Col alignItems="center">
            <SimpleGrid gap={2}>
              <Link to="/">
                <SquareButton>
                  <HomeIcon />
                </SquareButton>
              </Link>
              <Link to="/users">
                <SquareButton>
                  <UsersIcon />
                </SquareButton>
              </Link>
              <Link to="/uploads">
                <SquareButton>
                  <UploadIcon />
                </SquareButton>
              </Link>
            </SimpleGrid>
          </Col>
          <Col></Col>
        </Col>
        <Col h="100%" flex={1}>
          {children}
        </Col>
      </Row>
    </ContainerScreen>
  )
}

export default AdminMasterPage
