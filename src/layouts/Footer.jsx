import logo from '../assets/Logo.webp'
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from '../icons'

export const Footer = () => {
	return (
		<footer style={{ display: 'none' }}>
			<img src={logo} alt='logo' />
			<nav>
				<a href='/'>Inicio</a>
				<a href='/'>Nosotros</a>
				<a href='/'>Vida</a>
				<a href='/'>Promociones</a>
			</nav>
			<nav>
				<a href='/'>Faq´s</a>
				<a href='/'>Blog</a>
				<a href='/'>Aviso de privacidad</a>
				<a href='/'>Contacto</a>
			</nav>
			<aside>
				Redes sociales
				<nav>
					<a href='https://www.facebook.com/' target='_blanck'>
						<FacebookIcon />
					</a>
					<a href='https://www.twitter.com/' target='_blanck'>
						<TwitterIcon />
					</a>
					<a href='https://www.instagram.com/' target='_blanck'>
						<InstagramIcon />
					</a>
					<a href='https://www.youtube.com/' target='_blanck'>
						<YouTubeIcon />
					</a>
				</nav>
			</aside>
		</footer>
	)
}
