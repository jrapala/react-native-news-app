import React, { useState } from "react"
import { SafeAreaView, View, Text, StatusBar } from "react-native"
import styled, { ThemeProvider } from "styled-components/native"

import { iOSDarkTheme } from "./styles"

const App: React.FC = () => {
	const [theme] = useState(iOSDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="light-content" />
			<StyledSafeAreaView>
				<SectionContainer>
					<SectionTitle>Welcome</SectionTitle>
					<SectionDescription>
						{`This is Juliette's React Native project template.`}
					</SectionDescription>
				</SectionContainer>
			</StyledSafeAreaView>
		</ThemeProvider>
	)
}

const StyledSafeAreaView = styled(SafeAreaView)`
	background-color: ${(props): string => props.theme.primaryColor};
	flex: 1;
`

const SectionContainer = styled(View)`
	margin-top: 32px;
	padding: 0 24px;
`

const SectionTitle = styled(Text)`
	color: ${(props): string => props.theme.textColorOnPrimary};
	font-size: 24px;
	font-weight: 600;
`

const SectionDescription = styled(Text)`
	color: ${(props): string => props.theme.textColorOnPrimary};
	font-size: 18px;
	font-weight: 400;
	margin-top: 8px;
`
export default App
