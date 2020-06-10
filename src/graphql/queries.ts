/* eslint-disable prettier/prettier */
import gql from "graphql-tag"

export const GET_TOP_HEADLINES = gql`
	query TopHeadlines {
		headlines
			@rest(
				type: "HeadlinesPayload"
				path: "top-headlines?country=us"
			) {
			articles @type(name: "Article") {
				author
				title
				description
				url
				urlToImage
				publishedAt
			}
		}
	}
`
