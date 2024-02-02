import { useNavigate } from 'react-router-dom'
import { FaUserTie } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCar } from 'react-icons/fa'
import { Container } from '../../components/Container/Container.styled'
import {
	ButtonGo,
	SubTitle,
	Text,
	Title,
	Wrapper,
	WrapperFlex,
	WrapperWelcome,
} from './Welcome.styled'

export default function Welcome() {
	const navigate = useNavigate()

	const handleGo = () => {
		navigate('/catalog')
	}

	return (
		<>
			<WrapperWelcome>
				<Title>Rent a Car, Rewrite Your Travel Story</Title>
				<ButtonGo onClick={handleGo}>Go</ButtonGo>
			</WrapperWelcome>
			<Container>
				<WrapperFlex>
					<Wrapper>
						<FaUserTie />
						<SubTitle>Full Discretion</SubTitle>
						<Text>
							From the beginning to the end, we’ll work our hardest to meet your
							highest expectations
						</Text>
					</Wrapper>
					<Wrapper>
						<FaCheckCircle />
						<SubTitle>Quality Guaranteed</SubTitle>
						<Text>
							Upgrade your travel experience with us. We have been doing this
							for over 10 years
						</Text>
					</Wrapper>
					<Wrapper>
						<FaCar />
						<SubTitle>Luxury Fleet</SubTitle>
						<Text>
							Choose between a range of modern luxury sedans, SUVs, vans,
							coaches and limousines
						</Text>
					</Wrapper>
				</WrapperFlex>
			</Container>
		</>
	)
}
