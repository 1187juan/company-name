import { Global } from '@emotion/react'

export const GlobalStyles = () => {
	return (
		<Global
			styles={({ colors }) => ({
				':root': {
					fontSize: '1rem',
					lineHeight: '1.5rem',
					fontWeight: 500,
					backgroundColor: colors.bg,
					color: colors.onSurfaceMedium,
				},
				body: {
					fontFamily: 'Poppins, sans-serif',
				},
			})}
		/>
	)
}
