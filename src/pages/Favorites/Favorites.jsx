import { CarItem } from '../../components/CarItem/CarItem'
import { CartListStyle } from '../../components/CarList/CarList.styled'
import { EmptyFavorite } from '../../components/EmptyFavorite/EmptyFavorite'
import { Error } from '../../components/Error/Error'
import { Filter } from '../../components/Filter/Filter'
import { getFilteredCars } from '../../components/helpers/getFilteredCars'
import { useCars } from '../../hooks/useCars'
import { Section } from '../../components/Section/Section.styled'
import { ContainerMain } from '../../components/SharedLayout/SharedLayout.styled'

const Favorites = () => {
	const { favorite, brandFilter, priceFilter, mileageFrom, mileageTo } =
		useCars()

	const filteredCars = getFilteredCars(
		favorite,
		brandFilter,
		priceFilter,
		mileageFrom,
		mileageTo
	)

	return (
		<ContainerMain>
			<div>
				{favorite.length === 0 ? (
					<EmptyFavorite />
				) : (
					<>
						<Filter />
						<Section>
							<CartListStyle>
								{filteredCars.length === 0 ? (
									<Error emptyFilter={true} />
								) : (
									filteredCars.map(car => (
										<CarItem dataCar={car} key={car.id} />
									))
								)}
							</CartListStyle>
						</Section>
					</>
				)}
			</div>
		</ContainerMain>
	)
}

export default Favorites
