import { Navbar } from './Navbar'
import logo from '../assets/Logo.webp'
export const Header = () => {
	return (
		<header>
			<img src={logo} alt='logo' />
			<Navbar />
		</header>
	)
}
