import React from 'react'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import sectionTwoImg from '../assets/section-two-image.webp'
import { upDownAnimate } from '@/utils/animation';
import MyButton from '@/components/MyButton/MyButton'

const SectionTwo = () => {
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      justifyContent='center'
      alignItems='center'
      px={10}>
      <Box w='full' as={motion.div} animation={upDownAnimate}>
        <Image
          src={sectionTwoImg}
          style={{ margin: 'auto' }}
          width={600}
          alt='section-two-imge' />
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
            <MyButton pages='home' text='Try ChatGPT' />
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default SectionTwo