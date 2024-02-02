import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'

export const NavUser = styled.nav`
	@media (max-width: 1439px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 122px;
		margin: 0 auto;
	}
`

export const LinkNav = styled(NavLink)`
	padding: 10px 27px;
	border-radius: 12px;
	border: 1px solid rgba(239, 237, 232, 0.2);
	font-size: 14px;
	line-height: 128.571%;
	background-color: ${theme.colors.accent};
	&:not(:last-child) {
		margin-bottom: 16px;
	}
	&.active {
		border-color: ${theme.colors.white};
		color: ${theme.colors.white};
	}
	&:hover {
		transform: scale(1.02);
		box-shadow: ${theme.shadows.medium};
		background-color: #0b44cd;
	}

	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 150%;
	}
	@media (min-width: 1440px) {
		border: 1px solid rgba(239, 237, 232, 0.2);
		border-color: ${theme.colors.accent};
		&:not(:last-child) {
			margin-right: 16px;
		}
		&.active {
			border: none;
			background-color: ${theme.colors.accent};
			color: ${theme.colors.white};
		}
	}
`
