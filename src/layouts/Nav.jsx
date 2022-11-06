import { useMediaQuery } from '../hooks'
import { Navbar } from './Navbar'
import { NavMenu } from './NavMenu'

export const Nav = () => {
	const isDesktop = useMediaQuery('screen and (min-width: 65rem)')

	if (isDesktop) return <Navbar />
	return <NavMenu />
}
