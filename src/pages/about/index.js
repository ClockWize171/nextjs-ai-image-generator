import Navbar from '@/components/Navbar/Navbar'
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import img from '../../assets/about.svg'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { FaRobot } from "react-icons/fa";
import Link from 'next/link'


const About = () => {

  const externalLink = (href, text) => {
    return (
      <Link href={href} passHref={true} target='_blank'>
        <u><b><i>{text}</i></b></u>
      </Link>
    )
  }

  return (
    <Box
      h='100%'
      bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.10 130%)',
        'linear(to-tl, myPurple.40 30%, myPurple.30)'
      )}

    >
      <Head>
        <title>About this website</title>
        <meta name="description" content="About this web application" />
        <meta property="og:title" content="About - What's on your mind?" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <Flex
        color={useColorModeValue('myPurple.40', 'myPurple.10')}
        h='90vh'
        flexDir='column'
        justifyContent='center'
        alignItems='center'>
        <Text fontSize={['3xl', '4xl']} fontWeight='bold'>About This Page</Text>
        <Box>
          <Image src={img} width={300} alt='about-image' />
        </Box>
        <Box px={[10, 10, 0]}>
          <List spacing={5} fontSize={['md', 'xl']}>
            <ListItem>
              <ListIcon as={FaRobot} color={useColorModeValue('myPurple.40', 'myPurple.10')} />
              Designed and Developed by {externalLink('https://github.com/ClockWize171', 'Thet Min Htin')}.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRobot} color={useColorModeValue('myPurple.40', 'myPurple.10')} />
              Used {externalLink('https://chakra-ui.com/', 'Chakra UI')} for component library.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRobot} color={useColorModeValue('myPurple.40', 'myPurple.10')} />
              {externalLink('https://openai.com/dall-e-2/', 'Dall-E')} and {externalLink('https://openai.com/blog/chatgpt/', 'ChatGPT')} AI systems are used.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRobot} color={useColorModeValue('myPurple.40', 'myPurple.10')} />
              This web app was created only for educational purpose.
            </ListItem>
          </List>
        </Box>

      </Flex>
    </Box>
  )
}

export default About