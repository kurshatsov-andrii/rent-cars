import { SharedLayout } from './components/SharedLayout/SharedLayout'
import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Welcome/Welcome'))
const Catalog = lazy(() => import('./pages/Catalog/Catalog'))
const Favorites = lazy(() => import('./pages/Favorites/Favorites'))

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path='catalog' element={<Catalog />} />
				<Route path='favorites' element={<Favorites />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	)
}
