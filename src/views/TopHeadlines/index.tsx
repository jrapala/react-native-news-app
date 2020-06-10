import React, { useEffect, useState } from "react"
import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	View,
	Text,
} from "react-native"
import styled from "styled-components/native"

import { Article } from "../../types/article"
import ArticleCard from "../../components/ArticleCard"
import { fetchHeadlines } from "../../utils/fetchHeadlines"

const TopHeadlines: React.FC = () => {
	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isRefreshing, setIsRefreshing] = useState(false)

	const handleLoad = () => {
		setIsLoading(true)
		fetchHeadlines()
			.then(headlines => setArticles(headlines))
			.then(() => {
				setIsLoading(false)
			})
	}

	const handleRefresh = () => {
		setIsRefreshing(true)
		fetchHeadlines()
			.then(headlines => setArticles(headlines))
			.then(() => {
				setIsRefreshing(false)
			})
	}

	useEffect(() => {
		handleLoad()
	}, [])

	return (
		<StyledSafeAreaView>
			<Container>
				<H1>Top Headlines</H1>
				{isLoading ? (
					<Spinner />
				) : (
					<Articles>
						<FlatList
							data={articles}
							renderItem={({ item }: { item: Article }) => (
								<ArticleCard article={item} />
							)}
							keyExtractor={(item): string => item.title}
							refreshing={isRefreshing}
							onRefresh={handleRefresh}
						/>
					</Articles>
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

const Container = styled(View)`
	flex: 1;
	margin-top: 5%;
	width: 80%;
`
const Spinner = styled(ActivityIndicator)`
	flex: 1;
`
const Articles = styled(View)`
	align-items: center;
	margin-top: 5%;
`

const H1 = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: 34px;
	font-weight: 700;
`

export default TopHeadlines
