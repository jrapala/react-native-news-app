import { API_KEY } from "react-native-dotenv"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { RestLink } from "apollo-link-rest"

const restLink = new RestLink({
	headers: {
		Authorization: API_KEY,
	},
	uri: `https://newsapi.org/v2/`,
})

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: restLink,
})
