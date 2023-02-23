import React from 'react'
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import sectionTwoImg from '../assets/section-two-image.png'
import { upDownAnimate } from '@/utils/animation'

const SectionTwo = () => {
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      justifyContent='center'
      alignItems='center'
      // h='full'
      px={10}>
      <Box w='full' as={motion.div} animation={upDownAnimate}>
        <Image src={sectionTwoImg} style={{ margin: 'auto' }} width={600} alt='section-two-imge' />
      </Box>
      <Flex
        w='full'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Text
          color={useColorModeValue('myPurple.40', 'myPurple.10')}
          textAlign='center'
          fontSize={['lg', 'lg', '2xl']}>
          Ask any possible question and get the <Text as='b'><i>IDEA</i></Text> <br />
          from well-trained model called <Text as='b'><i>ChatGPT</i></Text>
        </Text>
        <Box mt={5}>
          <Link href='/chatgpt'>
            <Button
              as={motion.div}
              borderRadius='none'
              px={10}
              size='lg'
              color={useColorModeValue('myPurple.40', 'myPurple.10')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              bgGradient={useColorModeValue(
                'linear(to-tl, primary.20, secondary.10)',
                'linear(to-tl, myPurple.30 30%, secondary.30)'
              )}
              _hover={{ bg: 'transparent' }}
              transition='0.01s'
              boxShadow='lg'
              variant='ghost'
            >
              Try ChatGPT
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default SectionTwo