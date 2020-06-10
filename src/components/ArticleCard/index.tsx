import React, { useContext } from "react"
import { Dimensions, View } from "react-native"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import AutoHeightImage from "react-native-auto-height-image"

import { Article } from "../../types/article"
import Link from "../Link"
import ArticleDate from "../ArticleDate"
import Headline from "../Headline"
import FavoriteStar from "../FavoriteStar"
import { FavoritesContext } from "../../utils/store"

interface Props {
	article: Article
}

const ArticleCard: React.FC<Props> = ({ article }) => {
	const navigation = useNavigation()
	const { favorites, handleSelection } = useContext(FavoritesContext)

	const handleStarPress = (): void => {
		handleSelection(article.title)
	}

	return (
		<BoxShadow>
			<ArticleWrapper>
				{article.urlToImage && (
					<AutoHeightImage
						accessibilityIgnoresInvertColors={false}
						source={{ uri: article.urlToImage }}
						width={Dimensions.get("window").width * 0.8}
					/>
				)}
				<TextWrapper>
					<Row>
						<ArticleDate publishDate={article.publishedAt} />
						<FavoriteStar
							onPress={handleStarPress}
							isFavorited={
								favorites.indexOf(article.title) !== -1
							}
						/>
					</Row>
					<Headline>{article.title}</Headline>
					<Link
						onPress={(): void =>
							navigation.navigate("HeadlineDetails", { article })
						}
						alignment="right"
					>
						Read More
					</Link>
				</TextWrapper>
			</ArticleWrapper>
		</BoxShadow>
	)
}

const BoxShadow = styled(View)`
	shadow-color: #a3b1c5;
	shadow-offset: 5px 5px;
	shadow-opacity: 0.5;
`
const ArticleWrapper = styled(View)`
	background-color: ${(props): string => props.theme.backgroundColor};
	border-radius: ${(props): string => props.theme.borderRadius};
	margin-bottom: 10%;
	overflow: hidden;
	width: 95%;
`

const TextWrapper = styled(View)`
	padding: 5%;
`
const Row = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`

export default ArticleCard
