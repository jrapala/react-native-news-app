import React, { useContext } from "react"
import { Dimensions, Linking, SafeAreaView, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import styled from "styled-components/native"
import AutoHeightImage from "react-native-auto-height-image"

import { RootStackParamList } from "../../types/navigation"
import ArticleDate from "../../components/ArticleDate"
import FavoriteStar from "../../components/FavoriteStar"
import Headline from "../../components/Headline"
import Link from "../../components/Link"
import { FavoritesContext } from "../../utils/store"

type HeadlineDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"HeadlineDetails"
>
interface Props {
	route: HeadlineDetailsScreenRouteProp
}

const HeadlineDetails: React.FC<Props> = ({ route }) => {
	const article = route.params.article
	const { favorites, handleSelection } = useContext(FavoritesContext)

	const handleStarPress = (): void => {
		handleSelection(article.title)
	}

	return (
		<StyledSafeAreaView>
			<Container>
				<Row>
					<ArticleDate publishDate={article.publishedAt} />
					<FavoriteStar
						onPress={handleStarPress}
						isFavorited={favorites.indexOf(article.title) !== -1}
					/>
				</Row>
				<Headline>{article.title}</Headline>
				<Author>{article.author}</Author>
				{article.urlToImage && (
					<AutoHeightImage
						accessibilityIgnoresInvertColors={false}
						source={{ uri: article.urlToImage }}
						width={Dimensions.get("window").width * 0.8}
					/>
				)}
				<Description>{article.description}</Description>
				<Link
					alignment="left"
					onPress={(): Promise<string> =>
						Linking.openURL(article.url || "")
					}
				>
					Go to Full Article
				</Link>
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

const Author = styled(Text)`
	color: ${(props): string => props.theme.secondaryFontColor};
	font-size: 17px;
	font-weight: 600;
	margin-vertical: 5%;
`

const Description = styled(Text)`
	font-size: 17px;
	margin-top: 5%;
`

export default HeadlineDetails
