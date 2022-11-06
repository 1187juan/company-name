import { useTheme } from '@emotion/react'
import logo from '../assets/Logo.webp'
import { Box, Container, Flex, Grid, Img, Link } from '../components'
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from '../icons'

export const Footer = () => {
	const theme = useTheme()
	return (
		<Box as='footer'>
			<Container
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
					justifyItems: 'center',
					gap: '1rem',
					padding: '2rem 0',
					textAlign: 'center',
					'@media screen and (min-width:35rem)': {
						justifyItems: 'start',
						textAlign: 'left',
					},
				}}
			>
				<Img
					src={logo}
					alt='logo'
					sx={{
						borderRadius: '50%',
						width: '5rem',
					}}
				/>
				<Grid as='nav' sx={{ gap: '1rem' }}>
					<Link href='/'>Inicio</Link>
					<Link href='/'>Nosotros</Link>
					<Link href='/'>Vida</Link>
					<Link href='/'>Promociones</Link>
				</Grid>
				<Grid as='nav' sx={{ gap: '1rem' }}>
					<Link href='/'>Faq´s</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>Aviso de privacidad</Link>
					<Link href='/'>Contacto</Link>
				</Grid>
				<Grid
					as='aside'
					sx={{
						gap: '1rem',
						alignContent: 'start',
						color: theme.colors.secondary,
					}}
				>
					Redes sociales
					<Flex
						as='nav'
						sx={{
							gap: '1rem',
							fontSize: '2rem',
						}}
					>
						<a href='https://www.facebook.com/' target='_blanck'>
							<FacebookIcon />
						</a>
						<a href='https://www.twitter.com/' target='_blanck'>
							<TwitterIcon />
						</a>
						<a href='https://www.instagram.com/' target='_blanck'>
							<InstagramIcon />
						</a>
						<a href='https://www.youtube.com/' target='_blanck'>
							<YouTubeIcon />
						</a>
					</Flex>
				</Grid>
			</Container>
		</Box>
	)
}
