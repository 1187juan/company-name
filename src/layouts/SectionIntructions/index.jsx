import { useTheme } from '@emotion/react'
import resource02 from '../../assets/resource02.svg'
import {
	Box,
	Button,
	Container,
	Grid,
	Img,
	Resorce03,
	Title,
} from '../../components'
import { useMediaQuery } from '../../hooks'
import { DoctorIcon, FormIcon, LaptopIcon, MoneyCircleIcon } from '../../icons'
import { ItemInstruction } from './ItemInstruction'

export const SectionIntructions = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery('screen and (min-width: 35rem)')
	return (
		<Box
			as='section'
			sx={{
				position: 'relative',
				overflow: 'hidden',
				backgroundColor: 'white',
			}}
		>
			<Container
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
					placeItems: 'center',
					paddingTop: '4rem',
					paddingBottom: '4rem',
					'@media screen and (min-width: 35rem)': {
						paddingRight: '6rem',
					},
				}}
			>
				<Img
					src={resource02}
					alt='resorce02'
					sx={{
						minWidth: 'min(100%, 20rem)',
						flex: '12 0',
					}}
				/>
				<Grid
					sx={{
						justifyItems: 'center',
						gap: '1rem',
						minWidth: 'min(100%, 25rem)',
						flex: '10 0',
					}}
				>
					<Title sx={{ textAlign: 'center' }}>
						Que lo más importante sea tu salud, cuídala con nosotros
					</Title>
					<Grid
						as='ul'
						sx={{
							gridTemplateColumns: '1fr 1fr',
							gap: '2rem',
							padding: 0,
							listStyle: 'none',
						}}
					>
						<ItemInstruction
							icon={<FormIcon />}
							number={1}
							description='Responde algunas preguntas sencillas'
						/>
						<ItemInstruction
							icon={<MoneyCircleIcon />}
							number={2}
							description='Obtenga precios en un instante*.'
						/>
						<ItemInstruction
							icon={<LaptopIcon />}
							number={3}
							description='Inicie su solicitud en línea.'
						/>
						<ItemInstruction
							icon={<DoctorIcon />}
							number={4}
							description='Profesionales con más de 50 años de experiencia en seguros.'
						/>
					</Grid>
					<Button>¡COTIZAR AHORA!</Button>
				</Grid>
			</Container>
			<Resorce03
				style={{
					position: 'absolute',
					top: '50%',
					right: 0,
					display: isDesktop ? 'block' : 'none',
					height: '18rem',
					color: theme.colors.secondary,
					translate: '50% -65%',
				}}
			/>
		</Box>
	)
}
