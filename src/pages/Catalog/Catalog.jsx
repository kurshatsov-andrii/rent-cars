import { ButtonLoadMore } from './Catalog.styled'
import { Empty } from '../../pages/Favorites/Favorites.styled'
import { Container } from '../../components/Container/Container.styled'

export default function Catalog() {
	return (
		<Container>
			<Empty>
				Sorry, no results were found for the filters you selected. You may want
				to consider other search options to find the you want.
			</Empty>
			<ButtonLoadMore>Load more</ButtonLoadMore>
		</Container>
	)
}
