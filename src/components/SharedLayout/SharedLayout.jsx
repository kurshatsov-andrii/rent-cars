import { Error } from '../../components/Error/Error'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Loading } from '../../components/Loading/Loading'
import { useCars } from '../../hooks/useCars'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
	const { error } = useCars()

	return (
		<>
			<Header />
			<Suspense fallback={<Loading />}>
				<main>
					{error ? (
						<Error error={error} />
					) : (
						<div>
							<Outlet />
						</div>
					)}
				</main>
			</Suspense>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
