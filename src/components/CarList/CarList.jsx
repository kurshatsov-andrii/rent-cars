import { CarItem } from '../../components/CarItem/CarItem'
import { CartListStyle } from './CarList.styled'

export const CarList = ({ data }) => {
	return (
		<>
			<CartListStyle>
				{data.map(car => (
					<CarItem dataCar={car} key={car.id} />
				))}
			</CartListStyle>
		</>
	)
}
