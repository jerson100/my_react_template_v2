import { chakra } from '@chakra-ui/react';

export const IconButton = chakra('button', {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: '2rem',
    height: '2rem',
    padding: 0,
    overflow: 'hidden',
    svg: {
      fontSize: 'xl'
    }
  }
});
