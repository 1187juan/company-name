import bannerImg from '../assets/banner.webp'
import { Box, Button, Flex } from '../components'

export const BannerSlide = () => {
	return (
		<Flex
			sx={{
				flexDirection: 'column',
				justifyContent: 'end',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				paddingTop: '12rem',
				paddingBottom: '3rem',
				background: `silver url("${bannerImg}") center/cover`,
			}}
		>
			<Box
				as='h2'
				sx={{
					fontSize: 'clamp(1.2rem, 4vw, 2rem)',
					textAlign: 'center',
					color: 'white',
					textShadow: '.25rem .25rem .5rem black',
				}}
			>
				<Box
					as='span'
					sx={{
						display: 'inline-block',
						marginBottom: 'clamp(1rem, 3vw, 2rem)',
					}}
				>
					Tenemos un Seguro de Vida
				</Box>
				<br />
				<Box
					as='span'
					sx={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 300 }}
				>
					ideal para tí.
				</Box>
			</Box>
			<Button>¡COTIZA AHORA!</Button>
		</Flex>
	)
}
