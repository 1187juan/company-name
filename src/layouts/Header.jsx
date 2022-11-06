import logo from '../assets/Logo.webp'
import { Box, Flex, Img } from '../components'
import { Nav } from './Nav'

export const Header = () => {
	return (
		<Box
			as='header'
			sx={{
				position: 'fixed',
				top: 0,
				zIndex: 1,
				width: '100%',
				paddingTop: '1rem',
				backgroundColor: 'hsla(0, 0%, 100%, .54)',
			}}
		>
			<Flex
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: '1rem',
					width: 'calc(100% - 2rem)',
					maxWidth: '75rem',
					paddingLeft: 'clamp(0rem, 4vw, 5rem)',
					margin: 'auto',
				}}
			>
				<Img
					src={logo}
					alt='logo'
					sx={{ borderRadius: '50%', width: '7rem', height: '7rem' }}
				/>
				<Nav />
			</Flex>
		</Box>
	)
}
