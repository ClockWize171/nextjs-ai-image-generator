import React from 'react'
import { Box, Flex, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import sectionOneImg from '../assets/section-one-image.svg'
import { upDownAnimate } from '@/utils/animation'

const SectionOne = () => {
  return (
    <Flex justifyContent='center' alignItems='center' flexDir='column' pb='40vh'>
      <Box mt={['10vh', '5vh']} animation={upDownAnimate}>
        <Image src={sectionOneImg} style={{ margin: 'auto' }} width={600} alt='section-one-image' />
      </Box>
      <Box mt={10} px={2}>
        <Text
          color={useColorModeValue('myPurple.40', 'myPurple.10')}
          textAlign='center'
          fontSize={['lg', 'xl', '2xl']}>
          Generate your imagination with the help of <Text as='b'><i>DALL-E AI System </i></Text><br />
          that can create realistic images and <br />
          art from a description in <Text as='b'><i>natural language </i></Text>.
        </Text>
      </Box>
      <Box mt={10}>
        <Link href='/dall-e'>
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
            Try Dall-E
          </Button>
        </Link>

      </Box>
    </Flex>
  )
}

export default SectionOne