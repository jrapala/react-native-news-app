import "react-native-gesture-handler"
import React, { useState } from "react"
import { StatusBar } from "react-native"
import { ThemeProvider } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"

import { iOSDarkTheme } from "./styles"
import TopHeadlines from "./views/TopHeadlines"
// import HeadlineDetails from "./views/HeadlineDetails"

const App: React.FC = () => {
	const [theme] = useState(iOSDarkTheme)

	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="dark-content" />
				<TopHeadlines />
				{/* <HeadlineDetails /> */}
			</ThemeProvider>
		</NavigationContainer>
	)
}

export default App
