import styled from '@emotion/styled'

const Element = styled('div')(({ sx }) => ({ display: 'flex', ...sx }))
export const Flex = ({ sx = {}, ...props }) => {
	return <Element {...props} sx={sx} />
}
