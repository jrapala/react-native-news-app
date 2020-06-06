import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		primaryColor: string
		textColorOnPrimary: string
	}
}
