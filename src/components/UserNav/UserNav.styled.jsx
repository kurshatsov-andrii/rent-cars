// import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
	&:not(:last-child) {
		margin-bottom: 16px;
	}
	&.active {
		color: ${({ theme: { colors } }) => colors.white};
		border-color: ${({ theme: { colors } }) => colors.white};
	}
	@media (min-width: 768px) {
		font-size: 16px;
		line-height: 150%;
	}
	@media (min-width: 1440px) {
		border: 1px solid rgba(239, 237, 232, 0.2);
		border-color: ${({ theme: { colors } }) => colors.accentLight};
		&:not(:last-child) {
			margin-right: 16px;
		}
		&.active {
			border: none;
			background-color: ${({ theme: { colors } }) => colors.accentLight};
			color: ${({ theme: { colors } }) => colors.white};
		}
	}
`
