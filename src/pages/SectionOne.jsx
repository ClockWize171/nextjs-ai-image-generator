import React from 'react'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import sectionOneImg from '../assets/section-one-image.webp'
import MyButton from '@/components/MyButton/MyButton'
import { upDownAnimate } from '@/utils/animation'

const SectionOne = () => {
  return (
    <Flex justifyContent='center' alignItems='center' flexDir='column' pb='40vh'>
      <Box mt={['10vh', '5vh']} animation={upDownAnimate}>
        <Image
          src={sectionOneImg}
          style={{ margin: 'auto' }}
          width={600}
          alt='section-one-image'
          placeholder='blur'
          blurDataURL={sectionOneImg.src}
          loading='eager' />
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
          <MyButton pages='home' text='Try DALL-E' />
        </Link>
      </Box>
    </Flex>
  )
}

export default SectionOne