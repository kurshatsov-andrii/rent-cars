import * as styled from 'styled-components'

export default styled.createGlobalStyle`
	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		font-family: 'Manrope', sans-serif;
		background: #fff;
		color: '#121417';
		min-height: 100vh;
		font-style: normal;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul,
	ol {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	ul::-webkit-scrollbar,
	body::-webkit-scrollbar,
	div::-webkit-scrollbar {
		position: absolute;
		right: 50px;
		width: 8px;
	}

	ul::-webkit-scrollbar-track,
	body::-webkit-scrollbar-track,
	div::-webkit-scrollbar-track {
		background: ${({ theme: { colors } }) => colors.white};
		border-radius: 10px;
	}

	ul::-webkit-scrollbar-thumb,
	body::-webkit-scrollbar-thumb,
	div::-webkit-scrollbar-track {
		background: ${({ theme: { colors } }) => colors.scroll};
		border-radius: 10px;
	}

	ul::-webkit-scrollbar-thumb:hover,
	body::-webkit-scrollbar-thumb:hover,
	div::-webkit-scrollbar-thumb:hover {
		background: ${({ theme: { colors } }) => colors.accentLight};
	}

	button {
		padding: 0;
		font: inherit;
		color: inherit;
		background-color: transparent;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		display: block;
	}
`
