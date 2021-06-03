import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Col, Row } from '../../../packages/react-chakra-ui'

interface DefaultPageProps {
  title: React.ReactNode
}

const DefaultPage: React.FC<DefaultPageProps> = ({ title, children }) => {
  return (
    <Col>
      <Row h={24} alignItems="center">
        <Heading userSelect="none" size="2xl">
          {title}
        </Heading>
      </Row>
      <Col>{children}</Col>
    </Col>
  )
}

export default DefaultPage
