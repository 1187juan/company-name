import { Grid } from './Grid'

export const Container = ({ children }) => {
	return (
		<Grid
			as='main'
			sx={{ width: 'calc(100% - 2rem)', maxWidth: '80rem', margin: 'auto' }}
		>
			{children}
		</Grid>
	)
}
