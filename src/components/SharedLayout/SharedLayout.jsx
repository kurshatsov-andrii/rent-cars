import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'

export const SharedLayout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
			<ToastContainer autoClose={2500} />
		</>
	)
}
