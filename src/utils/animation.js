import { keyframes } from '@chakra-ui/react';

const animationOne = keyframes`
  0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
`

export const upDownAnimate = `${animationOne} infinite 1s alternate`