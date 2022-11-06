import styled from '@emotion/styled'

export const Button = styled('button')(({ sx, color = 'primary', theme }) => ({
	border: 'none',
	outline: 'none',
	padding: '1rem 1.5rem',
	textTransform: 'uppercase',
	fontWeight: 700,
	color: 'white',
	backgroundColor: theme.colors[color],
	transition: 'scale 100ms ease',
	'&:hover': {
		filter: 'brightness(1.125)',
	},
	'&:active': {
		scale: '0.95',
	},
	...sx,
}))
