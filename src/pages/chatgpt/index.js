import React from 'react'
import { Box, Button, Flex, Input, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import dallEimg from '../../assets/dall-e-image.svg'
import Image from 'next/image'
import Head from 'next/head'

const ChatGPT = () => {
  return (
    <Box
      h='100vh'
      bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.10 130%)',
        'linear(to-tl, myPurple.40 30%, myPurple.30)'
      )}

    >
      <Head><title>Dall-E</title></Head>
      <Navbar />

    </Box>
  )
}

export default ChatGPT