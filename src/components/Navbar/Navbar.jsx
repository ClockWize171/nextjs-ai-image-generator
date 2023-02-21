import React, { useRef } from 'react'
import { Flex, Box, Spacer, Center, Text } from '@chakra-ui/react'
import Image from 'next/image'
import lightLogo from '../../assets/logo-white.svg'
import darkLogo from '../../assets/logo-dark.svg'
import MenuToggle from './MenuToggle'
import { motion, useCycle } from 'framer-motion'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <Flex justifyContent='center' alignItems='center' p={3}>
      <Box>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}>
          <motion.div className={styles.background} style={{ background: isOpen ? 'white' : 'white' }} variants={sidebar} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </Box>
      <Box px={3}>
        <Image src={lightLogo} alt='logo' />
      </Box>
      <Spacer />
      <Box>
        thetminhtin@gmail.com
      </Box>
    </Flex>
  )
}

export default Navbar