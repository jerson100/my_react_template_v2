import { createIcon } from '@chakra-ui/react'

export const UserIcon = createIcon({
	displayName: 'UserIcon',
	viewBox: '0 0 16 16',
	path: [
		<path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' fill='currentColor' />,
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1Z'
			fill='currentColor'
		/>,
	],
})
