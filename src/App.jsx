import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from '@emotion/react'
import { Home } from './pages'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	)
}
