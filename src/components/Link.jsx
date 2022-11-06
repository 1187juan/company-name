import styled from '@emotion/styled'

export const Link = styled('a')(({ theme }) => ({
	color: theme.colors.secondary,
	textDecorationLine: 'none',
	fontSize: '.9375rem',
	'&:hover, &:focus': {
		textDecorationLine: 'underline',
	},
}))
