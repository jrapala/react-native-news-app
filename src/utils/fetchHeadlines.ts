import { API_KEY } from "react-native-dotenv"

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

export async function fetchHeadlines() {
	const result = await fetch(url).then(response => response.json())

	return result.articles
}
