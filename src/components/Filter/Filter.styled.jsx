import styled from '@emotion/styled'
import theme from '../../styles/theme'

export const FormFilter = styled.form`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-bottom: 50px;
	gap: 18px;
`

export const WrapperMakes = styled.div`
	width: 224px;
	margin-top: 8px;
`

export const WrapperPrice = styled.div`
	width: 125px;
	margin-top: 8px;
`

export const WrapperFlex = styled.div`
	display: flex;
	margin-top: 8px;
`

export const WrapperFrom = styled.div`
	color: #121417;
	font-size: 18px;
	font-weight: 500;
	line-height: 111.111%;
	border-radius: 14px 0px 0px 14px;
	padding: 14px 0 14px 24px;
	border-right: 2px solid rgba(138, 138, 137, 0.2);
	background: #f7f7fb;
`

export const WrapperTo = styled.div`
	color: #121417;
	font-size: 18px;
	font-weight: 500;
	line-height: 111.111%;
	border-radius: 0px 14px 14px 0px;
	padding: 14px 23px 14px 24px;
	background: #f7f7fb;
`

export const LabelMakes = styled.label`
	color: #8a8a89;
	font-size: 14px;
	font-weight: 500;
	line-height: 128.571%;
`

export const InputMile = styled.input`
	background: #f7f7fb;
	border: none;
	outline: none;
	width: 89px;
	font-size: 18px;
	font-weight: 500;
	line-height: 111.111%;
`

export const SearchButton = styled.button`
	padding: 14px 44px;
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
	@media (min-width: 768px) {
		margin-top: 26px;
	}
`
