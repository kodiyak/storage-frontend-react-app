import React from 'react'
import { Square } from '@chakra-ui/react'

const SquareButton: React.FC = ({ ...rest }) => {
  return (
    <Square
      size={10}
      bg="gray.800"
      rounded="sm"
      fontSize="xl"
      color="GrayText"
      cursor="pointer"
      _hover={{ color: 'white', bg: 'primary.500' }}
      {...rest}
    />
  )
}

export default SquareButton
