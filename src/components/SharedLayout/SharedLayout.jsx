import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from '../Header/Header'

export const SharedLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<ToastContainer autoClose={2500} />
		</>
	)
}
