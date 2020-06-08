import React from "react"
import { Text, View } from "react-native"
import styled from "styled-components/native"
import { Icon } from "react-native-elements"

import { Article } from "../../types/article"

interface Props {
	article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
	const dateOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	}
	const date = article.publishedAt
		? new Date(Date.parse(article.publishedAt)).toLocaleDateString(
				undefined,
				dateOptions
		  )
		: ""

	return (
		<ArticleWrapper>
			<TextWrapper>
				<Row>
					<ArticleDate>{date}</ArticleDate>
					<Icon
						name="star-border"
						type="materialicon"
						color="#000000"
						size={30}
					/>
				</Row>
				<Headline>{article.description}</Headline>
				<Link>Read More</Link>
			</TextWrapper>
		</ArticleWrapper>
	)
}

const ArticleWrapper = styled(View)`
	background-color: ${(props): string => props.theme.backgroundColor};
	border-radius: ${(props): string => props.theme.borderRadius};
	margin-top: 5%;
	padding: 5%;
	shadow-color: #a3b1c5;
	shadow-offset: 5px 5px;
	shadow-opacity: 0.5;
	width: 90%;
`
const TextWrapper = styled(View)`
	padding: 5%;
`
const Row = styled(View)`
	flex-direction: row;
	justify-content: space-between;
`
const ArticleDate = styled(Text)`
	color: ${(props): string => props.theme.secondaryFontColor};
	font-size: 17px;
	font-weight: 400;
	margin-top: 8px;
`

const Headline = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: 20px;
	font-weight: 600;
	margin-top: 5%;
`

const Link = styled(Text)`
	color: ${(props): string => props.theme.highlight};
	font-size: 17px;
	font-weight: 500;
	margin-top: 5%;
	text-align: right;
`

export default ArticleCard
