import React from 'react'
import Image from 'next/image'
import {
  Flex,
  Box,
  Spacer,
  Text,
  useMediaQuery,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  IconButton,
  Avatar,
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import SideMenu from './SideMenu'
import lightLogo from '../../assets/logo-white.svg'
import darkLogo from '../../assets/logo-dark.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex justifyContent='center' alignItems='center' p={3}>
      <Box>
        <IconButton
          color={useColorModeValue('myPurple.10', 'myPurple.40')}
          onClick={onOpen}
          size='lg'
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          aria-label='Hamburger'
          icon={<RxHamburgerMenu size={30} />} />
        <SideMenu isOpen={isOpen} onClose={onClose} />
      </Box>
      <Box px={3}>
        <Image src={useColorModeValue(lightLogo, darkLogo)} className={styles.logo} alt='logo' placeholder="blur"
          blurDataURL={'../../assets/logo-white.svg'} />
      </Box>
      <Spacer />
      <Box>
        {isLargerThan768 ?
          <Text color={isDark ? 'myPurple.40' : 'myPurple.10'}>
            thetminhtin998@gmail.com
          </Text>
          : <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />}
      </Box>
    </Flex>
  )
}

export default Navbar