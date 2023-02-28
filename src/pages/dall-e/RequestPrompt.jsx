import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  Input,
  Text,
  FormErrorMessage,
  Button,
  useColorModeValue,
  FormHelperText,
  Select,
  Badge,
  useMediaQuery,
  useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion'
import Image from 'next/image'
import dallEimg from '../../assets/dall-e-image.png'
import styles from './DallE.module.css'

const RequestPrompt = ({
  setResolution,
  resolution,
  setUserPrompt,
  handleSubmit,
  error,
  disable,
  attempt,
  waitTime }) => {

  const Counter = () => {
    return (
      <>
        {disable ? <Box textAlign='center'>
          <Badge py={1} my={2} colorScheme='yellow'>
            Please wait (00:{waitTime})
          </Badge>
        </Box> : null
        }
      </>

    )
  }

  const [isLargerThan700] = useMediaQuery('(min-height: 700px)')
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
      flexDir='column'
      h={isLargerThan700 ? '90vh' : 'full'}
      justifyContent='center'
      alignItems='center'
      pb={10}>
      <Flex w='50%' justifyContent='center' alignSelf='center'>
        <Image
          className={styles.image}
          src={dallEimg}
          alt='Robot Image'
          placeholder='blur'
          width="0"
          height="0"
          blurDataURL={dallEimg.src} />
      </Flex>
      <Flex flexDir='column' w={['95%', '90%', '30%']} gap={3}>
        <Text
          fontSize={['md', '2xl']}
          textAlign='center'
          color={useColorModeValue('myPurple.40', 'myPurple.10')}>
          What do you want me to draw?
        </Text>
        <Counter />
        <Text textAlign='center'>
          Attempt: <Badge borderRadius='full' colorScheme={attempt >= 5 ? 'red' : 'green'}>{attempt ? attempt : '0'}/5</Badge>
        </Text>
        <Box>
          <Text mb={2}>Select your dimension: {resolution}</Text>
          <Select
            onChange={(e) => setResolution(e.target.value)}
            borderColor={useColorModeValue('myPurple.40', 'myPurple.10')}
            borderRadius='none'>
            <option value='256x256'>256x256</option>
            <option value='512x512'>512x512</option>
            <option value='1024x1024'>1024x1024</option>
          </Select>

          <FormControl isInvalid={error}>
            {resolution !== '256x256' ?
              <FormHelperText fontWeight='bold' color={isDark ? 'yellow.100' : 'yellow.300'}>
                NOTE: The image processing time will be longer depend on resolution
              </FormHelperText>
              :
              null
            }
            <Input
              onChange={(e) => setUserPrompt(e.target.value)}
              isRequired
              mt={5}
              borderRadius='none'
              borderColor={useColorModeValue('myPurple.40', 'myPurple.10')}
              placeholder='your idea here...' />
            {error ?
              <FormErrorMessage>
                {error}
              </FormErrorMessage> :
              null}
            <Button
              m='auto'
              type='submit'
              isDisabled={disable}
              onClick={handleSubmit}
              w='full'
              as={disable ? motion.button : motion.div}
              borderRadius='none'
              mt={5}
              cursor='pointer'
              fontWeight='normal'
              size={['sm', 'md']}
              color={useColorModeValue('myPurple.10', 'myPurple.40')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              bgGradient={useColorModeValue(
                'linear(to-tl, myPurple.30 30%, myPurple.40)',
                'linear(to-tl, myPurple.20, myPurple.10)'
              )}
              _hover={{
                bgGradient:
                  useColorModeValue(
                    'linear(to-tl, myPurple.30 30%, myPurple.40)',
                    'linear(to-tl, myPurple.20, myPurple.10)'
                  )
              }}
              transition='0.01s'
              boxShadow='lg'
            >
              Generate your imagination
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  )
}

export default RequestPrompt