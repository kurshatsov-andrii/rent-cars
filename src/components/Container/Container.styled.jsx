import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;

	@media (min-width: 375px) {
		width: 375px;
	}
	@media (min-width: 768px) {
		padding: 0 32px;
		width: 768px;
	}
	@media (min-width: 1440px) {
		padding: 0 40px;
		width: 1440px;
	}
`
