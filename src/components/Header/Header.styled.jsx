import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	border-bottom: 1px solid rgba(239, 237, 232, 0.2);
	@media (min-width: 768px) {
		padding: 19px 0;
	}
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const WrapperDes = styled.div`
	display: none;
	@media (min-width: 1440px) {
		display: block;
	}
`

export const IconMenu = styled(HiMenuAlt1)`
	width: 24px;
	height: 24px;
	color: ${({ theme: { colors } }) => colors.accentLight};
	@media (min-width: 768px) {
		width: 32px;
		height: 32px;
	}
`

export const ButtonMenu = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 14px;
	background-color: transparent;
	border: 0;
	@media (min-width: 768px) {
		margin-left: 16px;
	}
	@media (min-width: 1440px) {
		display: none;
	}
`

export const WrapperLogo = styled(Link)`
	cursor: pointer;
	color: ${({ theme: { colors } }) => colors.accentLight};
	font-size: 24px;
	font-weight: 800;
	&:hover {
		transform: scale(1.02);
		border-radius: 12px;
	}
`
