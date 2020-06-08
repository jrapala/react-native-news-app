import React from "react"
import { FlatList, SafeAreaView, View, Text } from "react-native"
import styled from "styled-components/native"

import { articles } from "../../constants/articles"
import { Article } from "../../types/article"
import ArticleCard from "../../components/ArticleCard"

const TopHeadlines: React.FC = () => {
	return (
		<StyledSafeAreaView>
			<Container>
				<H1>Top Headlines</H1>
				<FlatList
					data={articles}
					renderItem={({ item }: { item: Article }) => (
						<ArticleCard article={item} />
					)}
					keyExtractor={item => item.title}
				/>
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

const H1 = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: 34px;
	font-weight: 700;
`

export default TopHeadlines
