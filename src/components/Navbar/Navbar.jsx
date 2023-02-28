import React from 'react'
import Image from 'next/image'
import {
  Flex,
  Box,
  useDisclosure,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import SideMenu from './SideMenu'
import lightLogo from '../../assets/logo-white.svg'
import darkLogo from '../../assets/logo-dark.svg'
import styles from './Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent='flex-start' alignItems='center' h='10vh' px={[2,10]}>
      <Box>
        <IconButton
          color={useColorModeValue('myPurple.40', 'myPurple.10')}
          onClick={onOpen}
          size='lg'
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          aria-label='Hamburger'
          icon={<RxHamburgerMenu size={30} />} />
        <SideMenu isOpen={isOpen} onClose={onClose} />
      </Box>
      <Box px={3}>
        <Link href='/'>
          <Image
            src={useColorModeValue(darkLogo, lightLogo)}
            className={styles.logo}
            alt='logo'
            placeholder="blur"
            blurDataURL={'../../assets/logo-white.svg'} />
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar