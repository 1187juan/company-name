import bannerImg from '../assets/banner.webp'
import { Flex, Button, Box } from '../components'

export const Banner = () => {
	return (
		<Flex
			as='section'
			sx={{
				position: 'relative',
				alignItems: 'center',
				minHeight: '100vmin',
				padding: '12rem 0 4rem 0',
				background: `silver url("${bannerImg}") center/cover`,
			}}
		>
			{/* <div>
				<ButtonIcon>{'<'}</ButtonIcon>
				<ButtonIcon>{'>'}</ButtonIcon>
			</div> */}

			<Flex
				sx={{
					width: '100%',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: 'auto',
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
		</Flex>
	)
}
