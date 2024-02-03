import { Error } from '../../components/Error/Error'
import { Header } from '../../components/Header/Header'
import { Loading } from '../../components/Loading/Loading'
import { useCars } from '../../hooks/useCars'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
	const { error } = useCars()
	// const { pathname: currentPath } = useLocation()

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
		</>
	)
}
