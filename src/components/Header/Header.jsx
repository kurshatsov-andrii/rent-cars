import { Container } from '../Container/Container.styled'
import {
	ButtonMenu,
	HeaderStyled,
	IconMenu,
	Wrapper,
	WrapperDes,
	WrapperLogo,
} from './Header.styled'

const Header = () => {
	return (
		<Container>
			<HeaderStyled>
				<WrapperLogo to='/'>RENT CARS</WrapperLogo>
				<Wrapper>
					<WrapperDes></WrapperDes>
					<ButtonMenu>
						<IconMenu />
					</ButtonMenu>
				</Wrapper>
			</HeaderStyled>
		</Container>
	)
}

export default Header
