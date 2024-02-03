import styled from 'styled-components'
import image from '../../images/blue-car.jpg'

export const ContainerEmptyFavorite = styled.div`
	display: flex;
	justify-content: center;
	background-image: url(${image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	min-height: calc(100vh - (95px + 84px));
`

export const EmptyFavoriteText = styled.p`
	padding-top: 80px;
	padding-left: 20px;
	padding-right: 20px;
	font-size: 28px;
	font-weight: 600;
	text-align: center;
	color: #fff;
	font-weight: 900;
	text-transform: uppercase;
	font-size: 44px;
	text-shadow: 1px 1px 0px #000000, -1px -1px 0px #ffffff;
	@media screen and (min-width: 760px) {
		padding-top: 150px;
	}
	@media screen and (min-width: 1200px) {
		padding-top: 220px;
	}
`
