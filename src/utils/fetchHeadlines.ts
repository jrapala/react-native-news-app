import { API_KEY } from "react-native-dotenv"
import { Article } from "../types/article"

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

// This function allows you to fetch articles directly from the REST API instead of directing through GraphQL
export async function fetchHeadlines(): Promise<Article[]> {
	const result = await fetch(url).then(response => response.json())

	return result.articles
}
