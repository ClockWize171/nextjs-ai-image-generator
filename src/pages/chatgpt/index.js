import React from 'react'
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useColorModeValue,
  HStack,
  Avatar,
  IconButton,
  Spacer,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import chatGPT from '../../assets/chatGPT.png'
import { FiSend, FiRefreshCcw } from "react-icons/fi";
import styles from './Chatgpt.module.css'
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
      <Head><title>ChatGPT</title></Head>
      <Navbar />
      <Flex
        mt={10}
        m='auto'
        w={['full', '80%']}
        h='90vh'
        className={styles.chatContainer}
        borderColor={useColorModeValue('myPurple.40', 'myPurple.10')}
        borderWidth='1px'
        flexDir='column'
        color={useColorModeValue('myPurple.40', 'myPurple.10')}
      >
        <Box h='80vh' overflowY='auto'>
          <Box
            px={[3, 10]}
            bgGradient={useColorModeValue(
              'linear(to-tl, myPurple.20, myPurple.10 130%)',
              'linear(to-tl, myPurple.40 30%, myPurple.30)'
            )}>
            <HStack h='auto' py={10} spacing={[3, 10]}>
              <Box marginBottom='auto'>
                <Avatar size='md' name='Ryan Florence' src={'https://bit.ly/ryan-florence'} />
              </Box>
              <Box>
                <Text color={useColorModeValue('myPurple.40', 'myPurple.10')}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut possimus obcaecati aliquam similique saepe maiores. Optio nemo voluptatem exercitationem rerum officia doloribus libero ullam. Dicta iusto ducimus quam laudantium?
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box
            px={[3, 10]}
            h='auto'
            bgGradient={useColorModeValue(
              'linear(to-b, secondary.10, secondary.30 130%)',
              'linear(to-tl, secondary.30 30%, secondary.20)'
            )}>
            <HStack h='auto' py={10} spacing={[3, 10]}>
              <Box marginBottom='auto'>
                <Avatar size='md' bg={useColorModeValue('secondary.30', 'secondary.10')} p={3} name='ChatGPT' src={chatGPT.src} />
              </Box>
              <Box>
                <Text color={useColorModeValue('myPurple.40', 'myPurple.10')}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut possimus obcaecati aliquam similique saepe maiores. Optio nemo voluptatem exercitationem rerum officia doloribus libero ullam. Dicta iusto ducimus quam laudantium?
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>

        <Box
          marginTop='auto'
          px={[3, 10]}
          py={5}
          bgGradient={useColorModeValue(
            'linear(to-tl, primary.20, secondary.10)',
            'linear(to-tl, myPurple.30 30%, secondary.30)'
          )}>
          <HStack h='full'>
            <Input
              borderColor={useColorModeValue('myPurple.40', 'myPurple.10')}
              borderRadius='2xl'
              placeholder='Ask Something...'
            />
            <IconButton
              as={motion.div}
              borderRadius='full'
              variant='ghost'
              aria-label='Restart'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              icon={<FiRefreshCcw />}
            />
            <IconButton
              as={motion.div}
              borderRadius='full'
              variant='ghost'
              aria-label='Send'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              icon={<FiSend />}
            />
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default ChatGPT