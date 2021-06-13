import React from 'react'
import { BoxOverlay, Col } from '../../../packages/react-chakra-ui/components'
import { Spinner } from '@chakra-ui/react'

const LoadingPage: React.FC = () => {
  return (
    <BoxOverlay alignItems="center" justifyContent="center">
      <Spinner size={'xl'} color="primary.500" speed="1s" />
    </BoxOverlay>
  )
}

export default LoadingPage
