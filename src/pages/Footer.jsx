import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Text
      color={useColorModeValue('myPurple.40', 'myPurple.10')}
      textAlign='center'
      fontSize={['xs', 'sm']} py={10}>
      © {new Date().getFullYear()} Design and Developed by <b><i>Thet Min Htin</i></b>
    </Text>
  )
}

export default Footer