import { Avatar, Box, HStack, Skeleton, Stack, useColorMode } from '@chakra-ui/react'
import chatGPT from '../../assets/chatGPT.png'
import React from 'react'

const LoadingSkeleton = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      px={[3, 10]}
      bg='whiteAlpha.300'>
      <HStack h='auto' py={10} spacing={[3, 10]}>
        <Box marginBottom='auto'>
          <Avatar
            size='md'
            bg={isDark ? 'secondary.10' : 'secondary.30'}
            p={3}
            name='ChatGPT'
            src={chatGPT.src} />
        </Box>
        <Box w='full'>
          <Stack>
            <Skeleton height='10px' />
            <Skeleton height='10px' />
            <Skeleton height='10px' />
          </Stack>
        </Box>
      </HStack>
    </Box>
  )
}

export default LoadingSkeleton