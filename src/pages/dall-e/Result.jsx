/* eslint-disable react-hooks/rules-of-hooks */
import { Text, Button, Flex, useColorModeValue, IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import imgLoaderDark from '../../assets/img-loader-dark.png'
import imgLoaderLight from '../../assets/img-loader-light.png'
import styles from './DallE.module.css'
import { FaCloudDownloadAlt, FaUndoAlt } from 'react-icons/fa'

const Result = ({ image, setImage }) => {
  const [disable, setDisable] = useState(true);

  const downloadImage = () => {
    window.open(image)
  }

  const MyButton = ({ text, icon, downloadImage }) => {
    return (
      <Button
        onClick={downloadImage}
        mt={3}
        isDisabled={disable}
        leftIcon={icon}
        as={motion.div}
        w='full'
        className='button-shadow'
        borderRadius='none'
        fontWeight='normal'
        size={['md', 'lg']}
        color={useColorModeValue('myPurple.10', 'myPurple.40')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        bgGradient={useColorModeValue(
          'linear(to-tl, primary.30, secondary.30)',
          'linear(to-tl, primary.20, secondary.10)'
        )}
        _hover={{
          bgGradient:
            useColorModeValue(
              'linear(to-tl, primary.30, secondary.30)',
              'linear(to-tl, primary.20, secondary.10)'
            )
        }}
        transition='0.01s'
        variant='ghost'
      >
        {text}
      </Button>
    )
  }

  return (
    <Flex
      gap={5}
      flexDir='column'
      h='90vh'
      justifyContent='center'
      alignItems='center'
      pb={10}>
      <Flex justifyContent='center' alignSelf='center' flexDir='column'>
        <Text textAlign='center' fontSize='3xl' fontWeight='bold'>Final Result 🎉</Text>
        <IconButton
          onClick={() => setImage('')}
          isDisabled={disable}
          my={5}
          alignSelf='center'
          borderRadius='full'
          icon={<FaUndoAlt />} />
        {image ?
          <Image
            width={512}
            height={512}
            className={styles.resultImage}
            src={image}
            placeholder='blur'
            blurDataURL={useColorModeValue(imgLoaderLight.src, imgLoaderDark.src)}
            alt='result image'
            onLoadingComplete={() => setDisable(false)}
          />
          :
          <>No Image</>
        }

          <MyButton text='Go to Download' icon={<FaCloudDownloadAlt />} downloadImage={downloadImage} />
      </Flex>
    </Flex>
  )
}

export default Result