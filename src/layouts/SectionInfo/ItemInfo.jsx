import { useTheme } from '@emotion/react'
import { Box, Grid } from '../../components'

export const ItemInfo = ({ icon, primary, secondary = '' }) => {
	const theme = useTheme()
	return (
		<Grid
			as='li'
			sx={{
				gridTemplateColumns: 'max-content 1fr',
				gap: '1rem',
				'&>svg': {
					fontSize: '2.5rem',
					color: theme.colors.primary,
				},
			}}
		>
			{icon}
			<div>
				<Box
					as='p'
					sx={{
						marginTop: 0,
						fontWeight: 700,
						color: theme.colors.secondary,
					}}
				>
					{primary}
				</Box>
				<p>{secondary}</p>
			</div>
		</Grid>
	)
}
