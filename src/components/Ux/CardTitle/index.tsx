import { Circle, Heading } from '@chakra-ui/react'
import { title } from 'process'
import React from 'react'
import { Col, Row } from '../../../packages/react-chakra-ui/components'

interface CardTitleProps {
  title: React.ReactNode
  icon?: React.ReactNode
}

const CardTitle: React.FC<CardTitleProps> = ({ title, icon, children }) => {
  return (
    <Col bg="gray.900" px={4} pb={4} pt={2} rounded="lg" shadow="lg">
      <Row h={20} alignItems="center">
        {icon && (
          <Circle size={14} bg="gray.700" mr={4} fontSize="3xl">
            {icon}
          </Circle>
        )}
        <Heading userSelect="none" size="lg">
          {title}
        </Heading>
      </Row>
      {children}
    </Col>
  )
}

export default CardTitle
