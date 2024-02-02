import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename='/rent-cars'>
		<App />
	</BrowserRouter>
)
