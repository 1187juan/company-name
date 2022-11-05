import { Global } from '@emotion/react'

export const GlobalStyles = () => {
	return (
		<Global
			styles={({ colors }) => ({
				':root': {
					fontSize: '16px',
					lineHeight: '24px',
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
