import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const Panel = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box rounded={'xl'} boxShadow={'custom'} layerStyle={'panel'} ref={ref} {...props} />
})
