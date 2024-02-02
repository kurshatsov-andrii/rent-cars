import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { SharedLayout } from './components/SharedLayout/SharedLayout'

const WelcomePage = lazy(() => import('./pages/Welcome/Welcome'))

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<WelcomePage />} />
				<Route path='*' element={<WelcomePage />} />
			</Route>
		</Routes>
	)
}

export default App
