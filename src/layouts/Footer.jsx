import logo from '../assets/Logo.webp'
import youtubeIcon from '../assets/youtube-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'

export const Footer = () => {
	return (
		<footer>
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
					<a href='https://www.youtube.com/' target='_blanck'>
						<img src={youtubeIcon} alt='youtube' />
					</a>
					<a href='https://www.facebook.com/' target='_blanck'>
						<img src={facebookIcon} alt='facebook' />
					</a>
					<a href='https://www.twitter.com/' target='_blanck'>
						<img src={twitterIcon} alt='twitter' />
					</a>
					<a href='https://www.instagram.com/' target='_blanck'>
						<img src={instagramIcon} alt='instagram' />
					</a>
					<a href='https://www.youtube.com/' target='_blanck'>
						<img src={youtubeIcon} alt='youtube' />
					</a>
				</nav>
			</aside>
		</footer>
	)
}
