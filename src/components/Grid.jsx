import styled from '@emotion/styled'

const Element = styled('div')(({ sx }) => ({ display: 'grid', ...sx }))
export const Grid = ({ sx = {}, ...props }) => {
	return <Element {...props} sx={sx} />
}
