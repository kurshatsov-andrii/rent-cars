import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 1200;
`

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 200px;
	height: 100vh;
	padding: 145px 20px 20px 20px;
	background-color: ${({ theme: { colors } }) => colors.accentLight};
	flex-direction: column;
	justify-content: space-between;
	@media (min-width: 768px) {
		width: 350px;
		padding: 180px 32px 32px 32px;
	}
`

export const IconClose = styled(AiOutlineClose)`
	color: ${({ theme: { colors } }) => colors.white};
	width: 20px;
	height: 20px;
	@media (min-width: 768px) {
		width: 32px;
		height: 32px;
	}
`

export const ButtonClose = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	background-color: transparent;
	border: 0;
	@media (min-width: 768px) {
		top: 26px;
		right: 32px;
	}
`
