import { FC, PropsWithChildren } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

export const Text: FC<PropsWithChildren & TextProps> = ({
  children,
  ...props
}) => {
  return (
    <ChakraText color={'cyan.500'} fontSize={'sm'} {...props}>
      {children}
    </ChakraText>
  );
};
