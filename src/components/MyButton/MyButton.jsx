import React from 'react'
import { Button, useColorModeValue as UseColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MyButton = ({ pages, text }) => {
  const handleBgGradient = () => {
    switch (pages) {
      case 'home':
        return UseColorModeValue(
          'linear(to-tl, primary.20, secondary.10)',
          'linear(to-tl, myPurple.30 30%, secondary.30)'
        )
      default:
        break;
    }
  }
  return (
    <Button
      w='full'
      as={motion.div}
      borderRadius='none'
      size='lg'
      color={UseColorModeValue('myPurple.40', 'myPurple.10')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      bgGradient={handleBgGradient}
      transition='0.01s'
      boxShadow='lg'
    >
      {text}
    </Button>
  )
}

export default MyButton