import React from "react"
import Head from "next/head"
import Navbar from "@/components/Navbar/Navbar"
import styles from '../styles/Home.module.css'
import { Text, Container, Box, useColorModeValue } from '@chakra-ui/react'
import darkimg from '../assets/home-bg-dark.svg'
import lightimg from '../assets/home-bg-light.svg'
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import Footer from "./Footer"

export default function Home() {
  return (
    <section className={styles.container}>
      <Head><title>Home</title></Head>
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
