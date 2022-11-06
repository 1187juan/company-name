import styled from '@emotion/styled'

const Element = styled('img')(({ sx }) => ({
	display: 'block',
	maxWidth: '100%',
	...sx,
}))
export const Img = ({ sx = {}, ...props }) => {
	return <Element {...props} sx={sx} />
}
