import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		backgroundColor: string
		borderRadius: string
		boxShadowColor: string
		boxShadowOffset: string
		boxShadowOpacity: number
		highlight: string
		primaryFontColor: string
		secondaryFontColor: string
		starSelectedColor: string
		starUnselectedColor: string
	}
}
