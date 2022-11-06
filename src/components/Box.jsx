import styled from '@emotion/styled'

const Element = styled('div')(({ sx }) => ({ ...sx }))
export const Box = ({ sx = {}, ...props }) => {
	return <Element {...props} sx={sx} />
}
