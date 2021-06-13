import { Circle, Square, Image, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from '../../../../../assets/img/logo-2.png'
import { useLoaders } from '../../../../../packages/react-chakra-ui/hooks'

const LoadingLogo: React.FC = () => {
  const size = 12

  const { isLoadingNamespace } = useLoaders('*')

  return (
    <Circle pos="relative" size={size} role="group" cursor="pointer">
      <Spinner
        w="100%"
        h="100%"
        pos="absolute"
        left={0}
        top={0}
        zIndex={5}
        speed="1s"
        color="primary.400"
        transition="all .4s ease-in-out"
        opacity={isLoadingNamespace ? 1 : 0}
      ></Spinner>
      <Square
        size={size}
        bg={isLoadingNamespace ? 'gray.800' : 'transparent'}
        mx="auto"
        p={isLoadingNamespace ? 3 : 2}
        rounded={isLoadingNamespace ? '50%' : 'lg'}
        pos="absolute"
        left={0}
        top={0}
        zIndex={4}
        transition="all .4s ease-in-out"
      >
        <Image src={Logo} w="100%" h="100%" objectFit="contain" />
      </Square>
    </Circle>
  )
}

export default LoadingLogo
