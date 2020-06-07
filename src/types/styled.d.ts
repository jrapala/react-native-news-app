import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		backgroundColor: string
		borderRadius: string
		boxShadow: string
		highlight: string
		primaryFontColor: string
		secondaryFontColor: string
		starColor: string
	}
}
