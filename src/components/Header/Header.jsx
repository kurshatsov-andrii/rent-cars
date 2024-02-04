import { useState } from 'react'
import { Container } from '../Container/Container.styled'
import { UserNav } from '../UserNav/UserNav'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import {
	ButtonMenu,
	HeaderStyled,
	IconMenu,
	Wrapper,
	WrapperDes,
	WrapperLogo,
} from './Header.styled'

export const Header = () => {
	const [showModal, setShowModal] = useState(false)

	const onOpenModal = () => {
		document.body.style.overflow = 'hidden'
		setShowModal(true)
	}

	const onCloseModal = () => {
		document.body.style.overflow = 'auto'
		setShowModal(false)
	}

	return (
		<Container>
			<HeaderStyled>
				<WrapperLogo to='/'>RENT CARS</WrapperLogo>
				<Wrapper>
					<WrapperDes>
						<UserNav />
					</WrapperDes>
					<ButtonMenu onClick={onOpenModal}>
						<IconMenu />
					</ButtonMenu>
					{showModal && <MobileMenu onClose={onCloseModal} />}
				</Wrapper>
			</HeaderStyled>
		</Container>
	)
}
