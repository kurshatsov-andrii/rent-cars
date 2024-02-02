import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { Global, ThemeProvider } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename='/rent-cars'>
		<ThemeProvider theme={theme}>
			<Global styles={GlobalStyles} />
			<App />
		</ThemeProvider>
	</BrowserRouter>
)
