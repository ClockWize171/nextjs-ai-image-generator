import React from 'react'
import { Box, Button, Flex, Input, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import dallEimg from '../../assets/dall-e-image.svg'
import styles from './DallE.module.css'
import Image from 'next/image'
import Head from 'next/head'

const DallE = () => {
  return (
    <Box
      h='100%'
      bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.10 130%)',
        'linear(to-tl, myPurple.40 30%, myPurple.30)'
      )}

    >
      <Head><title>Dall-E</title></Head>
      <Navbar />
      <Flex
        gap={5}
        flexDir='column'
        h='90vh'
        justifyContent='center'
        alignItems='center'>
        <Flex justifyContent='center' alignSelf='center'>
          <Image className={styles.image} src={dallEimg} alt='Robot Image' />
        </Flex>
        <Box>
          <Text fontSize={['lg', '2xl']} color={useColorModeValue('myPurple.40', 'myPurple.10')}>
            What do you want me to draw?
          </Text>
        </Box>
        <Box w={['90%', '90%', '20rem']}>
          <Input size='lg' borderRadius='none' borderColor={useColorModeValue('myPurple.40', 'myPurple.10')} placeholder='your idea here...' />
        </Box>
        <Box>
          <Button
            as={motion.div}
            borderRadius='full'
            px={10}
            fontWeight='normal'
            size={['md', 'lg']}
            color={useColorModeValue('myPurple.10', 'myPurple.40')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            bgGradient={useColorModeValue(
              'linear(to-tl, myPurple.30 30%, myPurple.40)',
              'linear(to-tl, myPurple.20, myPurple.10)'
            )}
            _hover={{
              bgGradient:
                useColorModeValue(
                  'linear(to-tl, myPurple.30 30%, myPurple.40)',
                  'linear(to-tl, myPurple.20, myPurple.10)'
                )
            }}
            transition='0.01s'
            boxShadow='lg'
            variant='ghost'
          >
            Generate your imagination
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default DallE