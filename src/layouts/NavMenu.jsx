import { useEffect, useRef } from 'react'
import { Box, Grid, IconButton, Link } from '../components'
import { useDisclosure } from '../hooks'
import { MenuIcon } from '../icons'

export const NavMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const box = useRef(null)

	useEffect(() => {
		let mouseup = null

		if (isOpen) {
			mouseup = e => {
				if (e.target !== box.current && e.target.parentNode !== box.current) {
					onClose()
				}
			}
			window.addEventListener('mouseup', mouseup)
		}

		return () => window.removeEventListener('mouseup', mouseup)
	}, [isOpen])

	return (
		<Box sx={{ position: 'relative' }}>
			<IconButton disabled={isOpen} onClick={onOpen}>
				<MenuIcon />
			</IconButton>
			{isOpen && (
				<Grid
					as='nav'
					ref={box}
					sx={{
						position: 'absolute',
						top: '5rem',
						right: 0,
						gap: '1rem',
						maxHeight: 'calc(100vh - 12rem)',
						padding: '1.5rem',
						overflow: 'auto',
						backgroundColor: 'white',
						transformOrigin: 'right top',
						animation: 'slideout 100ms ease reverse',
						'@keyframes slideout': {
							to: {
								scale: '0.8',
								opacity: 0,
							},
						},
					}}
				>
					<Link href='/'>Inicio</Link>
					<Link href='/'>Nosotros</Link>
					<Link href='/'>Vida</Link>
					<Link href='/'>Promociones</Link>
					<Link href='/'>Faq´s</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>Contacto</Link>
				</Grid>
			)}
		</Box>
	)
}
