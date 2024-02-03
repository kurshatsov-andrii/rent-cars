import { SharedLayout } from './components/SharedLayout/SharedLayout'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

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
				<Route path='*' element={<Home />} />
			</Route>
		</Routes>
	)
}

// import { Route, Routes } from 'react-router-dom'
// import { lazy } from 'react'
// import { SharedLayout } from './components/SharedLayout/SharedLayout'

// const WelcomePage = lazy(() => import('./pages/Welcome/Welcome'))
// const CatalogPage = lazy(() => import('./pages/Catalog/Catalog'))
// const FavoritesPage = lazy(() => import('./pages/Favorites/Favorites'))

// export const App = () => {
// 	return (
// 		<Routes>
// 			<Route path='/' element={<SharedLayout />}>
// 				<Route index element={<WelcomePage />} />
// 				<Route path='catalog' element={<CatalogPage />} />
// 				<Route path='favorites' element={<FavoritesPage />} />
// 				<Route path='*' element={<WelcomePage />} />
// 			</Route>
// 		</Routes>
// 	)
// }

// export default App
