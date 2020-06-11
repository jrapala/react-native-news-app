import { Article } from "./article"

export type RootStackParamList = {
	TopHeadlines: undefined
	HeadlineDetails: { article: Article }
}
