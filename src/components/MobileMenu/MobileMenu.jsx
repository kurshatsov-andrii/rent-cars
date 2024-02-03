import { useEffect } from 'react'
import { Overlay, Wrapper, IconClose, ButtonClose } from './MobileMenu.styled'
import { UserNav } from '../UserNav/UserNav'

export const MobilMenu = ({ onClose }) => {
	useEffect(() => {
		const handleClick = e => {
			if (e.code === 'Escape') {
				onClose()
			}
		}
		window.addEventListener('keydown', handleClick)
		return () => {
			window.removeEventListener('keydown', handleClick)
		}
	}, [onClose])

	const onOverlayClickClose = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<Overlay onClick={onOverlayClickClose}>
			<Wrapper onClick={onClose}>
				<ButtonClose>
					<IconClose />
				</ButtonClose>
				<UserNav />
			</Wrapper>
		</Overlay>
	)
}
