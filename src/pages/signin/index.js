import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import logo from '../../assets/logo-white.svg'
import styles from './Signin.module.css'
import { Box, Text, Button } from '@chakra-ui/react';
import { FaGoogle } from "react-icons/fa";
import { motion } from 'framer-motion';


const Signin = () => {
  const router = useRouter()

  const handleSignin = () => {
    router.push('/')
  }

  return (
    <Box className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>
      <Text
        mt={5}
        color='myPurple.10'
        fontWeight='semibold'
        fontSize={['xl', '3xl']}>
        Welcome from
      </Text>
      <Image
        mt={5}
        className={styles.logo}
        src={logo}
        alt='Logo'
        placeholder="blur"
        blurDataURL={'../../assets/logo-white.svg'} />
      <Text
        mt={5}
        mb={5}
        fontSize={['xl', '2xl']}
        color='myPurple.10'
        fontWeight='light'
      >
        Please sign in with google account <br />to access the web.
      </Text>
      <Button
        onClick={handleSignin}
        // className={styles.button}
        boxShadow='dark-lg'
        as={motion.div}
        color='myPurple.40'
        size={['md', 'lg']}
        borderRadius='full'
        bgGradient='linear(to-tl, primary.20, secondary.10)'
        _hover={{ bgGradient: 'linear(to-bl, primary.20, secondary.10)' }}
        leftIcon={<FaGoogle />}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition='0.01s'>
        Sign in with Google
      </Button>
    </Box>
  )
}

export default Signin