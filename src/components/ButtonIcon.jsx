import styled from '@emotion/styled'

export const ButtonIcon = styled('button')(
	({ sx, color = 'primary', theme }) => ({
		border: 'none',
		outline: 'none',
		padding: '1.5rem',
		borderRadius: '50%',
		textTransform: 'uppercase',
		fontWeight: 700,
		color: 'white',
		backgroundColor: theme.colors[color],

		'&:hover': {
			filter: 'brightness(1.125)',
		},
		'&:active': {
			scale: '0.95',
		},
		...sx,
	})
)
