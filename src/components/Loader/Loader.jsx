import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import loadingImage from '../../assets/loading-image.svg'
import { upDownAnimate } from '@/utils/animation'

const Loader = () => {
  return (
    <Flex
      gap={3}
      flexDir='column'
      h='90vh'
      justifyContent='center'
      alignItems='center'>
      <Box>
        <Text fontSize={['4xl', '5xl']} fontWeight='bold'>Loading ....</Text>
      </Box>
      <Box animation={upDownAnimate}>
        <Image
          src={loadingImage}
          style={{ width: 'auto', height: 'auto' }}
          width={300}
          height={300}
          alt='loadingImage' />
      </Box>
    </Flex>
  )
}

export default Loader