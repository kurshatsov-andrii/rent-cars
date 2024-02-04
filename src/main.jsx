import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/constants/theme'
import { persistor, store } from './redux/store'
import 'modern-normalize'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter basename='/rent-cars'>
					<GlobalStyles />
					<App />
				</BrowserRouter>
			</PersistGate>
		</ThemeProvider>
	</Provider>
)
