import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { FilterIcon } from './FilterIcon'

export interface FilterWithCountIconProps {
	count?: string | number
	color?: string
}

export const FilterWithCountIcon: FC<FilterWithCountIconProps> = ({
	count,
	color,
}) => {
	return (
		<>
			<FilterIcon color={color} />
			{count !== 0 && (
				<Box
					rounded={50}
					bg={color}
					w={4}
					h={4}
					fontSize={11}
					textColor={'white'}
					textAlign={'center'}
					position='relative'
					ms={'-8px'}
					marginY={'-8px'}>
					{count}
				</Box>
			)}
		</>
	)
}
