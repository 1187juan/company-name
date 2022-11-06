import { useState } from 'react'

export const useDisclosure = ({ defaultOpen = false } = {}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen)
	const onOpen = () => setIsOpen(true)
	const onClose = () => setIsOpen(false)
	const onToggle = () => setIsOpen(prevValue => !prevValue)

	return { isOpen, onOpen, onClose, onToggle }
}
