import { Icon, chakra } from '@chakra-ui/react'
import { AiOutlineWarning } from 'react-icons/ai'

const InfoErrorOuline = () => (
	<Icon as={AiOutlineWarning} color='brand.quanta.secondary.icon' />
)

export const InfoError = chakra(InfoErrorOuline)
