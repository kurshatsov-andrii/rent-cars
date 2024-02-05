import styled from 'styled-components'

export const FooterStyle = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
	align-items: center;
	width: 100%;
	padding: 20px 0px;
	font-size: 16px;
	color: ${({ theme: { colors } }) => colors.accentLight};
	background-color: ${({ theme: { colors } }) => colors.white};

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}
`

export const LinkStyle = styled.a`
	text-decoration: underline;
	color: ${({ theme: { colors } }) => colors.accentLight};
	font-size: 16px;

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}
`
