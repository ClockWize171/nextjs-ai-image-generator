import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Flex,
  Input,
  useColorModeValue,
  HStack,
  IconButton,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import { FiSend, FiRefreshCcw } from "react-icons/fi";
import styles from './Chatgpt.module.css'
import Head from 'next/head'
import Chat from './Chat'
import LoadingSkeleton from './LoadingSkeleton';

const ChatGPT = () => {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{ user: 'chatgpt', message: 'How can I help?' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef(null);


  // handle scroll to bottm
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog])

  // handle first \n in data
  const handleWhiteSpace = (dataString) => {
    return dataString.replace(/^\n\n/, '')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newChatLog = [...chatLog, { user: 'me', message: `${input}` }]
    setInput("");
    setChatLog(newChatLog)
    setLoading(true)
    try {
      const response = await fetch(`/api/chatgpt?prompt=${input}`);
      const data = await response.json();
      const reply = data.choices[0].text;
      setChatLog([...newChatLog, { user: 'chatgpt', message: `${handleWhiteSpace(reply)}` }]);
      setLoading(false);
    } catch (error) {
      setError('Oops! Something went wrong...')
      console.log(error.message);
      setLoading(false);
    }
  }

  const clearChatLog = () => {
    setChatLog([{ user: 'chatgpt', message: 'How can I help?' }])
  }

  const [isLargerThan700] = useMediaQuery('(min-height: 700px)')

  return (
    <Box
      h='100vh'
      bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.10 130%)',
        'linear(to-tl, myPurple.40 30%, myPurple.30)'
      )}

    >
      <Head>
        <title>ChatGPT</title>
        <meta name="description" content="Ask any possible question here." />
        <meta property="og:title" content="CHATGPT - What's on your mind?" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <Flex
        mt={10}
        m='auto'
        w={['full', '80%']}
        h={isLargerThan700 ? '90vh' : '90%'}
        className={styles.chatContainer}
        borderColor={useColorModeValue('myPurple.40', 'myPurple.10')}
        borderWidth='1px'
        flexDir='column'
        color={useColorModeValue('myPurple.40', 'myPurple.10')}
      >
        <Box h='full' overflowY='auto'>
          {chatLog.map((message, index) => (
            <Chat message={message} key={index} loading={loading} error={error} />
          ))}
          {loading && <LoadingSkeleton />}
          {error !== "" && <Text textAlign='center' mt={5} fontSize='xl'>{error}</Text>}
          <div ref={bottomRef} />
        </Box>

        <Box
          marginTop='auto'
          px={[3, 10]}
          py={5}
          bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.400')}
        >
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <HStack h='full'>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                borderColor={useColorModeValue('myPurple.40', 'myPurple.10')}
                borderRadius='2xl'
                placeholder='Ask Something...'
              />
              <IconButton
                onClick={clearChatLog}
                type='submit'
                as={motion.div}
                borderRadius='full'
                variant='ghost'
                aria-label='Restart'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                icon={<FiRefreshCcw />}
              />
              <IconButton
                onClick={handleSubmit}
                as={motion.div}
                borderRadius='full'
                variant='ghost'
                aria-label='Send'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                icon={<FiSend />}
              />
            </HStack>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default ChatGPT