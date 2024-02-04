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

// import { createGlobalStyle } from 'styled-components'

// export default createGlobalStyle = `
//  html {
// 		box-sizing: border-box;
// 		scroll-behavior: smooth;
// 	}
// `

// html {
// 	box-sizing: border-box;
// 	scroll-behavior: smooth;
// }

// body {
// 	margin: 0;
// 	font-family: 'Manrope', sans-serif;
// 	${'' /* background: ${theme.colors.white}; */}
// 	background: #FFF;
// 	color: '#121417';
// 	${'' /* color: ${theme.colors.black}; */}
// 	min-height: 100vh;
// 	font-style: normal;
// }

// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p {
// 	margin: 0;
// }

// ul,
// ol {
// 	list-style: none;
// 	padding-left: 0;
// 	margin: 0;
// }

// button {
// 	padding: 0;
// 	font: inherit;
// 	color: inherit;
// 	background-color: transparent;
// 	cursor: pointer;
// }

// 	a {
// 		text-decoration: none;
// 		color: inherit;
// 	}

// 	img {
// 		display: block;
// 	}
// `
