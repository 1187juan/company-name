import styled from '@emotion/styled'

const Element = styled('div')(({ sx }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	aspectRatio: '1 / 1',
	...sx,
}))
export const Center = ({ sx = {}, ...props }) => {
	return <Element {...props} sx={sx} />
}
