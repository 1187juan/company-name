import { Flex, Link } from '../components'

export const Navbar = () => {
	return (
		<Flex
			as='nav'
			sx={{
				columnGap: '3rem',
				flexWrap: 'wrap',
			}}
		>
			<Link href='/'>Inicio</Link>
			<Link href='/'>Nosotros</Link>
			<Link href='/'>Vida</Link>
			<Link href='/'>Promociones</Link>
			<Link href='/'>Faq´s</Link>
			<Link href='/'>Blog</Link>
			<Link href='/'>Contacto</Link>
		</Flex>
	)
}
