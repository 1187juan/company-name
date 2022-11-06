import styled from '@emotion/styled'
import { forwardRef } from 'react'

const Element = styled('div')(({ sx }) => ({ display: 'grid', ...sx }))

export const Grid = forwardRef(({ sx = {}, ...props }, ref) => {
	return <Element {...props} sx={sx} ref={ref} />
})
