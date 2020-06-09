import React from "react"
import { SafeAreaView, View } from "react-native"
import styled from "styled-components/native"

import Link from "../../components/Link"
import ArticleDate from "../../components/ArticleDate"
import FavoriteStar from "../../components/FavoriteStar"
import Headline from "../../components/Headline"

const HeadlineDetails: React.FC = () => {
	return (
		<StyledSafeAreaView>
			<Container>
				<Link alignment="right">Close</Link>
				<Row>
					<ArticleDate publishDate={null} />
					<FavoriteStar />
				</Row>
				<Headline>Headline</Headline>
			</Container>
		</StyledSafeAreaView>
	)
}

const StyledSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	background-color: ${(props): string => props.theme.backgroundColor};
	flex: 1;
`

const Container = styled(View)`
	flex: 1;
	margin-top: 5%;
	width: 80%;
`

const Row = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10%;
`

export default HeadlineDetails
