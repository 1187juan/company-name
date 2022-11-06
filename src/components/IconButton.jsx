import styled from '@emotion/styled'

export const IconButton = styled('button')(
	({ sx, color = 'primary', theme }) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '1rem',
		textTransform: 'uppercase',
		fontSize: '1.25rem',
		fontWeight: 700,
		color: 'white',
		backgroundColor: theme.colors[color],
		borderRadius: '50%',
		border: 'none',
		outline: 'none',

		'&:hover': {
			filter: 'brightness(1.125)',
		},
		'&:active': {
			scale: '0.95',
		},
		'&:disabled': {
			pointerEvents: 'none',
			backgroundColor: 'hsl(0, 0%, 75%)',
		},
		...sx,
	})
)
