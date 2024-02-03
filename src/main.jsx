import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize'
import 'react-toastify/dist/ReactToastify.css'
import { persistor, store } from './redux/store'
import { Global, ThemeProvider } from '@emotion/react'
import App from './App'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename='/rent-cars'>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<Global styles={GlobalStyles} />
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
)

// import ReactDOM from 'react-dom/client'

// import { BrowserRouter } from 'react-router-dom'
// import 'modern-normalize'
// import { theme } from './styles/theme'
// import { GlobalStyles } from './styles/GlobalStyles'
// import { Global, ThemeProvider } from '@emotion/react'

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<BrowserRouter basename='/rent-cars'>
// 		<ThemeProvider theme={theme}>
// 			<Global styles={GlobalStyles} />
// 			<App />
// 		</ThemeProvider>
// 	</BrowserRouter>
// )
