import React from "react"
import { SafeAreaView, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import styled from "styled-components/native"

import { RootStackParamList } from "../../types/navigation"
import ArticleDate from "../../components/ArticleDate"
import FavoriteStar from "../../components/FavoriteStar"
import Headline from "../../components/Headline"

type HeadlineDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"HeadlineDetails"
>
interface Props {
	route: HeadlineDetailsScreenRouteProp
}

const HeadlineDetails: React.FC<Props> = ({ route }) => {
	const article = route.params.article

	return (
		<StyledSafeAreaView>
			<Container>
				<Row>
					<ArticleDate publishDate={article.publishedAt} />
					<FavoriteStar />
				</Row>
				<Headline>{article.description}</Headline>
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
