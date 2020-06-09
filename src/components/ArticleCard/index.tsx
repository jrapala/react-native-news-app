import React from "react"
import { Image, View } from "react-native"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"

import { Article } from "../../types/article"
import Link from "../Link"
import ArticleDate from "../ArticleDate"
import Headline from "../Headline"
import FavoriteStar from "../FavoriteStar"

interface Props {
	article: Article
}

const ArticleCard: React.FC<Props> = ({ article }) => {
	const navigation = useNavigation()

	return (
		<ArticleWrapper>
			{article.urlToImage && (
				<ImageWrapper>
					<StyledImage
						accessibilityIgnoresInvertColors={false}
						source={{ uri: article.urlToImage }}
						resizeMode={"cover"}
					/>
				</ImageWrapper>
			)}
			<TextWrapper>
				<Row>
					<ArticleDate publishDate={article.publishedAt} />
					<FavoriteStar />
				</Row>
				<Headline>{article.description}</Headline>
				<Link
					handleOnPress={() => navigation.navigate("HeadlineDetails")}
					alignment="right"
				>
					Read More
				</Link>
			</TextWrapper>
		</ArticleWrapper>
	)
}

const ArticleWrapper = styled(View)`
	background-color: ${(props): string => props.theme.backgroundColor};
	border-radius: ${(props): string => props.theme.borderRadius};
	margin-bottom: 10%;
	shadow-color: #a3b1c5;
	shadow-offset: 5px 5px;
	shadow-opacity: 0.5;
	width: 95%;
`
const ImageWrapper = styled(View)`
	height: 150px;
	width: 100%;
`
const StyledImage = styled(Image)`
	border-top-left-radius: ${(props): string => props.theme.borderRadius};
	border-top-right-radius: ${(props): string => props.theme.borderRadius};
	flex: 1;
`
const TextWrapper = styled(View)`
	padding: 5%;
`
const Row = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`

export default ArticleCard
