import React from "react"
import Head from "next/head"
import Image from "next/image"
import Navbar from "@/components/Navbar/Navbar"
import styles from '../styles/Home.module.css'
import { Text, Container, Box, chakra } from '@chakra-ui/react'
import img from '../assets/sign-in-blob.svg'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head><title>Home</title></Head>
      <Box className={styles.section1}>
        <Navbar />
        Section 1
      </Box>
      <Box h='100vh' bgGradient='linear(to-b, secondary.30, secondary.10)'>
        Section 2
      </Box>
    </section>
  )
}
