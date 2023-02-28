import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import notFound from '../assets/notFound.svg'
import Router from 'next/router'
import { RiArrowGoBackFill } from "react-icons/ri";

const pageNotFound = () => {
  return (
    <Box
      h='100%'
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.10 130%)',
        'linear(to-tl, myPurple.40 30%, myPurple.30)'
      )}

    >
      <Head><title>404 | Page Not Found</title></Head>
      <Flex
        gap={3}
        flexDir='column'
        h='100vh'
        justifyContent='center'
        alignItems='center'>
        <Box>
          <Text fontSize='7xl' letterSpacing={10} fontWeight='bold'>404</Text>
        </Box>
        <Box>
          <Image src={notFound.src} width={300} height={300} alt='404 Not Found' placeholder='blur' blurDataURL={notFound.src} />
        </Box>
        <Box>
          <Text fontSize='5xl'>
            Ooops... Page not found
          </Text>
        </Box>
        <Box>
          <Button rightIcon={<RiArrowGoBackFill />} onClick={() => Router.back()}>
            Go Back
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default pageNotFound