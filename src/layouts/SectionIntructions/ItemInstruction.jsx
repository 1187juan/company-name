import { useTheme } from '@emotion/react'
import { Box, Center } from '../../components'

export const ItemInstruction = ({ icon, number, description }) => {
	const theme = useTheme()
	return (
		<Box as='li'>
			<Box
				sx={{
					position: 'relative',
					width: '8rem',
					paddingTop: '3rem',
					paddingLeft: '3rem',
					margin: 'auto',
					fontSize: '5rem',
					color: theme.colors.secondary,
				}}
			>
				<Center
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '5rem',
						fontSize: '4rem',
						borderRadius: '50%',
						border: `.125rem solid ${theme.colors.primary}`,
					}}
				>
					{number}
				</Center>
				{icon}
			</Box>

			<Box as='p' sx={{ textAlign: 'center' }}>
				{description}
			</Box>
		</Box>
	)
}
