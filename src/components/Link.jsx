import styled from '@emotion/styled'

export const Link = styled('a')(({ theme }) => ({
	color: theme.colors.secondary,
	textDecorationLine: 'none',
	fontSize: '.9375rem',
	fontWeight: 600,
	'&:hover, &:focus': {
		textDecorationLine: 'underline',
	},
}))
