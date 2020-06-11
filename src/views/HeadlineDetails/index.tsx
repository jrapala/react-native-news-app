import React, { useContext } from "react"
import { Dimensions, Linking, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { RouteProp } from "@react-navigation/native"
import styled from "styled-components/native"
import AutoHeightImage from "react-native-auto-height-image"

import { RootStackParamList } from "../../types/navigation"
import ArticleDate from "../../components/ArticleDate"
import FavoriteStar from "../../components/FavoriteStar"
import ArticleTitle from "../../components/ArticleTitle"
import Link from "../../components/Link"
import { FavoritesContext } from "../../utils/store"
import normalize from "../../utils/normalize"

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
				<ArticleTitle>{article.title}</ArticleTitle>
				{article.author && <Author>{article.author}</Author>}
				{article.urlToImage && (
					<StyledAutoHeightImage
						accessibilityIgnoresInvertColors={false}
						source={{ uri: article.urlToImage }}
						width={Dimensions.get("screen").width * 0.8}
					/>
				)}
				{article.description && (
					<Description>{article.description}</Description>
				)}
				{article.url && (
					<Link
						alignment="left"
						onPress={(): Promise<string> =>
							Linking.openURL(article.url || "")
						}
					>
						Go to Full Article
					</Link>
				)}
			</Container>
		</StyledSafeAreaView>
	)
}

const StyledSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	background-color: ${(props): string => props.theme.backgroundColor};
	flex: 1;
`

const Container = styled(ScrollView)`
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
	font-size: ${normalize(13) + "px"};
	font-weight: 600;
	margin-top: 5%;
`

const StyledAutoHeightImage = styled(AutoHeightImage)`
	margin-top: 5%;
`

const Description = styled(Text)`
	font-size: ${normalize(13) + "px"};
	margin-top: 5%;
`

export default HeadlineDetails
