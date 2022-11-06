import { Box } from './Box'

export const Container = ({ children, sx = {} }) => {
	return (
		<Box
			sx={{
				width: 'calc(100% - 2rem)',
				maxWidth: '70rem',
				margin: 'auto',
				...sx,
			}}
		>
			{children}
		</Box>
	)
}
