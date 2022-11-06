import resorce01 from '../../assets/resource01.svg'

import { ItemInfo } from './ItemInfo'
import { Box, Container, Grid, Img, Resorce03, Title } from '../../components'
import { CardIdIcon, LaptopIcon, MoneyIcon, SecurityIcon } from '../../icons'
import { useTheme } from '@emotion/react'

export const SectionInfo = () => {
	const theme = useTheme()
	return (
		<Box as='section' sx={{ position: 'relative', backgroundColor: 'white' }}>
			<Container
				sx={{
					display: 'flex',
					gap: '1rem',
					flexWrap: 'wrap',
					padding: '6rem 0',
				}}
			>
				<Grid
					sx={{
						flex: '11 0',
						minWidth: 'min(100%, 30rem)',
					}}
				>
					<Title sx={{ textAlign: 'center' }}>
						Beneficios de usar Plan life
					</Title>
					<Grid as='ul'>
						<ItemInfo
							icon={<MoneyIcon />}
							primary='Costo'
							secondary='Nuestra tecnología nos permite reducir costos y ofrecer tarifas
				competitivas.'
						/>
						<ItemInfo
							icon={<SecurityIcon />}
							primary='Seguridad'
							secondary='Estamos certificados para proteger todas tus transacciones.
				Asistencia a usuarios, Asistencia personalizada, soporte'
						/>
						<ItemInfo
							icon={<LaptopIcon />}
							primary='Atención 24/7'
							secondary='Somos una empresa mexicana. Entendemos mejor que nadie tus necesidades.'
						/>
						<ItemInfo
							icon={<CardIdIcon />}
							primary='Registro rápido y sencillo'
							secondary='Regístrate y empieza a transaccionar en menos de 30 minutos.'
						/>
					</Grid>
				</Grid>
				<Img
					src={resorce01}
					alt='resorce1'
					sx={{
						flex: '10 0',
						minWidth: 'min(100%, 15rem)',
					}}
				/>
			</Container>
			<Resorce03
				style={{
					position: 'absolute',
					left: 0,
					bottom: 0,
					translate: '-50% 25%',
					height: '20rem',
					color: theme.colors.secondary,
				}}
			/>
		</Box>
	)
}
