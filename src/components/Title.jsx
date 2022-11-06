import styled from '@emotion/styled'

export const Title = styled('h2')(({ sx, color = 'primary', theme }) => ({
	fontSize: '1.5rem',
	fontWeight: 700,
	color: theme.colors[color],
	...sx,
}))
