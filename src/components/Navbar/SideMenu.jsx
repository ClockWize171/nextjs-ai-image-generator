/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import darklogo from '../../assets/logo-dark.svg'
import lightlogo from '../../assets/logo-white.svg'
import Image from 'next/image'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Box,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { link } from './link'
import { RxSun, RxMoon } from "react-icons/rx";

const SideMenu = ({ isOpen, onClose }) => {
  const { toggleColorMode } = useColorMode()
  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bgGradient={useColorModeValue(
        'linear(to-tl, myPurple.20, myPurple.40)',
        'linear(to-tl, myPurple.10, myPurple.20)'
      )}>
        <DrawerCloseButton size='lg' color={useColorModeValue('myPurple.10', 'myPurple.40')} />
        <DrawerHeader>
          <Image src={useColorModeValue(lightlogo, darklogo)} alt='logo' />
        </DrawerHeader>

        <DrawerBody>
          <Flex flexDir='column' justifyContent='center' alignItems='center' >
            {link.map((link, index) => (
              <Box key={index} w='full' my={5}>
                <Button
                  size='lg'
                  color={useColorModeValue('myPurple.10', 'myPurple.40')}
                  boxShadow='lg'
                  _hover={{ bg: 'transparent', boxShadow: 'inner' }}
                  w='full'
                  as={motion.div}
                  variant='ghost'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition='0.01s'>
                  {link.name}
                </Button>
              </Box>
            ))}
            <Box>
              <IconButton
                onClick={toggleColorMode}
                boxSize={16}
                as={motion.div}
                borderRadius='full'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition='0.01s'
                color={useColorModeValue('myPurple.10', 'myPurple.40')}
                boxShadow='lg'
                variant='ghost'
                _hover={{ bg: 'transparent', boxShadow: 'inner' }}
                icon={useColorModeValue(<RxSun size='25' />, <RxMoon size='25' />)}
              />
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SideMenu