import styled from '@emotion/styled'
import theme from '../../styles/theme'

export const WrapperWelcome = styled.div`
	margin: 0 auto;
	max-width: 1600px;
	height: 400px;
	padding: 100px 0px;
	background-image: url(/rent-cars/src/images/auto-cover.jpg);
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	@media (min-width: 1440px) {
		padding: 200px 0px;
		height: 600px;
	}
`

export const Title = styled.h1`
	font-weight: 900;
	text-transform: uppercase;
	font-size: 44px;
	color: ${theme.colors.white};
	text-align: center;
`

export const ButtonGo = styled.button`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-top: 28px;
	padding: 12px 52px;
	border-radius: 12px;
	background-color: ${theme.colors.accent};
	color: ${theme.colors.white};
	font-size: 14px;
	font-weight: 600;
	line-height: 142.857%;
	box-shadow: ${theme.shadows.small};
	transition-property: transform, box-shadow, background-color;
	transition-duration: 0.25s;
	transition-timing-function: ${theme.animation.cubicBezier};
	&:hover {
		transform: scale(1.02);
		box-shadow: ${theme.shadows.medium};
		background-color: #0b44cd;
	}
`

export const Wrapper = styled.div`
	margin-top: 24px;
	& svg {
		display: flex;
		margin-left: auto;
		margin-right: auto;
		width: 40px;
		height: 40px;
		fill: ${theme.colors.accent};
	}
`

export const SubTitle = styled.h2`
	font-weight: 600;
	font-size: 20px;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
`

export const Text = styled.p`
	font-size: 14px;
	text-align: center;
	line-height: 1.5;
	@media (min-width: 1440px) {
		width: 294px;
	}
`

export const WrapperFlex = styled.div`
	padding-bottom: 40px;
	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		gap: 16px;
	}
	@media (min-width: 1440px) {
		gap: 52px;
	}
`
