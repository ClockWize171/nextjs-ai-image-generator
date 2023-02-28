import { Avatar, Box, HStack, Text, useColorMode } from '@chakra-ui/react'
import chatGPT from '../../assets/chatGPT.png';
import React from 'react';
import defaultUser from '../../assets/default-user.png';

const Chat = ({ message }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      px={[3, 10]}
      bg={message.user === 'chatgpt' ? 'whiteAlpha.300' : 'transparent'}>
      <HStack h='auto' py={10} spacing={[3, 10]}>
        <Box marginBottom='auto'>
          {message.user === 'chatgpt' ?
            <Avatar
              size='md'
              bg={isDark ? 'secondary.10' : 'secondary.30'}
              p={3}
              name='ChatGPT'
              src={chatGPT.src} />
            :
            <Avatar
              size='md'
              name='User'
              src={defaultUser.src}
            />
          }
        </Box>
        <Box>
          <Text color={isDark ? 'myPurple.10' : 'myPurple.40'} whiteSpace='pre-line'>
            {message.message}
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default Chat