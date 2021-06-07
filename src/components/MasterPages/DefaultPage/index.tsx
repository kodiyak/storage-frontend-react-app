import { Heading, Box } from '@chakra-ui/react'
import React from 'react'
import { Col, Row, TextMini } from '../../../packages/react-chakra-ui'
import SidebarLeftDefault from '../Sidebars/SidebarLeftDefault'

interface DefaultPageProps {
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  SidebarLeft?: React.ReactNode
}

const DefaultPage: React.FC<DefaultPageProps> = ({
  title,
  description,
  children,
  leftContent,
  rightContent,
  SidebarLeft = <SidebarLeftDefault />
}) => {
  return (
    <Box w="100%" h="100%">
      <Row w="100%" h="100%">
        {SidebarLeft}
        <Col px={4} flex={1} overflowY="auto">
          {title && (
            <Row h={24} alignItems="center" flexShrink={0}>
              {leftContent}
              <Col flex={1}>
                <Heading userSelect="none" size="2xl">
                  {title}
                </Heading>
                {description && (
                  <TextMini userSelect="none" color="GrayText">
                    {description}
                  </TextMini>
                )}
              </Col>
              {rightContent}
            </Row>
          )}
          <Box flex={1}>
            <Col flex={1} minH="100%" minW="100%" pos="relative">
              {children}
            </Col>
          </Box>
        </Col>
      </Row>
    </Box>
  )
}

export default DefaultPage
