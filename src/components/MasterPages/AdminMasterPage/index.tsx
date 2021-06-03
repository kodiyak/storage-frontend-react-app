import { SimpleGrid, Square } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, ContainerScreen, Row } from '../../../packages/react-chakra-ui'
import {
  HomeIcon,
  UploadIcon,
  UsersIcon
} from '../../../packages/react-chakra-ui/src/icons'
import SquareButton from './src/SquareButton/index'

const AdminMasterPage: React.FC = ({ children }) => {
  return (
    <ContainerScreen>
      <Row w="100%" h="100%">
        <Col h="100%" w={16} bg="gray.900" justifyContent="space-between">
          <Square></Square>
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
        <Col h="100%" flex={1} px={4}>
          {children}
        </Col>
      </Row>
    </ContainerScreen>
  )
}

export default AdminMasterPage
