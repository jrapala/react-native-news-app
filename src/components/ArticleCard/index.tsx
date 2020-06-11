import React, { useContext } from "react"
import { Dimensions, View } from "react-native"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import AutoHeightImage from "react-native-auto-height-image"

import { Article } from "../../types/article"
import Link from "../Link"
import ArticleDate from "../ArticleDate"
import ArticleTitle from "../ArticleTitle"
import FavoriteStar from "../FavoriteStar"
import { FavoritesContext } from "../../utils/store"
import useScreenDimensions from "../../hooks/useScreenDimensions"

interface Props {
	article: Article
}

interface DimensionProps {
	isLandscape: boolean
}

const ArticleCard: React.FC<Props> = ({ article }) => {
	const navigation = useNavigation()
	const { favorites, handleSelection } = useContext(FavoritesContext)

	const handleStarPress = (): void => {
		handleSelection(article.title)
	}

	const { isLandscape } = useScreenDimensions()
	const imageWidth =
		Dimensions.get("screen").width * (isLandscape ? 0.3 : 0.8)

	return (
		<BoxShadow>
			<ArticleWrapper isLandscape={isLandscape}>
				{article.urlToImage && (
					<StyledAutoHeightImage
						accessibilityIgnoresInvertColors={false}
						source={{ uri: article.urlToImage }}
						width={imageWidth}
						isLandscape={isLandscape}
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
					<ArticleTitle>{article.title}</ArticleTitle>
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
const ArticleWrapper = styled(View)<DimensionProps>`
	align-items: ${(props): string =>
		props.isLandscape ? "center" : "stretch"};
	background-color: ${(props): string => props.theme.backgroundColor};
	border-radius: ${(props): string => props.theme.borderRadius};
	elevation: 5;
	flex-direction: ${(props): string =>
		props.isLandscape ? "row" : "column"};
	margin-bottom: ${(props): string => (props.isLandscape ? "5%" : "10%")};
	overflow: hidden;
	position: relative;
	width: ${(props): string => (props.isLandscape ? "80%" : "95%")};
`

const TextWrapper = styled(View)`
	flex-shrink: 1;
	padding: 5% 5% 0 5%;
`
const Row = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`

const StyledAutoHeightImage = styled(AutoHeightImage)<DimensionProps>`
	border-radius: ${(props): string =>
		props.isLandscape ? props.theme.borderRadius : "0px"};
`

export default ArticleCard
