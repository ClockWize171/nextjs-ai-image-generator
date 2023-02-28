import React from "react"
import Head from "next/head"
import Navbar from "@/components/Navbar/Navbar"
import styles from '../styles/Home.module.css'
import { Box, useColorModeValue } from '@chakra-ui/react'
import darkimg from '../assets/home-bg-dark.svg'
import lightimg from '../assets/home-bg-light.svg'
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import Footer from "./Footer"

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generate your photo from your imagination and ask possible question to OpenAI in one place" />
        <meta property="og:title" content="Home - What's on your mind?" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Box style={{
        backgroundImage: useColorModeValue(
          `url(${lightimg.src})`,
          `url(${darkimg.src})`
        )
      }}
        className={styles.section1}>
        <Navbar />
        <SectionOne />
      </Box>
      <Box bgGradient={useColorModeValue(
        'linear(to-b, secondary.10, secondary.30)',
        'linear(to-b, secondary.30, secondary.10)'
      )}>
        <SectionTwo />
        <Footer />
      </Box>
    </section>
  )
}
