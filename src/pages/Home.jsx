import { Container } from '../components/Container'
import {
	Banner,
	Header,
	SectionInfo,
	SectionAdditionalInfo,
	SectionIntructions,
	Footer,
} from '../layouts'

export const Home = () => {
	return (
		<>
			<Header />
			<Banner />
			<Container>
				{/* <SectionInfo />
				<SectionAdditionalInfo />
				<SectionIntructions /> */}
			</Container>
			<Footer />
		</>
	)
}
