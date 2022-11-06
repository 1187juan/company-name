import { Box, Button, Container, Grid, Title } from '../components'

export const SectionAdditionalInfo = () => {
	return (
		<Box as='section'>
			<Container sx={{ display: 'grid', gap: '3rem', padding: '3rem 0' }}>
				<Title sx={{ textAlign: 'center' }}>
					Que lo más importante sea tú salud,
					<br />
					cuídala con nosotros
				</Title>
				<Grid
					sx={{
						gridTemplateColumns: 'auto',
						placeItems: 'center',
						columnGap: '1rem',
						'@media screen and (min-width:65rem)': {
							gridTemplateColumns: '1fr 1fr 25%',
						},
					}}
				>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper
					</p>
					<Button color='secondary'>SABER MÁS</Button>
				</Grid>
			</Container>
		</Box>
	)
}
