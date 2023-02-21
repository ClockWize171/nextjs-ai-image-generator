import React from "react"
import Head from "next/head"
import Navbar from "@/components/Navbar/Navbar"
import styles from '../styles/Home.module.css'
import { Text, Container, Box, useColorModeValue } from '@chakra-ui/react'
import darkimg from '../assets/home-bg-dark.svg'
import lightimg from '../assets/home-bg-light.svg'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head><title>Home</title></Head>
      <Box style={{ backgroundImage: useColorModeValue(`url(${darkimg.src})`, `url(${lightimg.src})`) }} className={styles.section1}>
        <Navbar />
        Section 1
      </Box>
      <Box h='100vh' bgGradient='linear(to-b, secondary.30, secondary.10)'>
        Section 2
      </Box>
    </section>
  )
}
