import React, { useState } from "react"
import { StatusBar } from "react-native"
import { ThemeProvider } from "styled-components/native"

import { iOSDarkTheme } from "./styles"
import TopHeadlines from "./views/TopHeadlines"

const App: React.FC = () => {
	const [theme] = useState(iOSDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="dark-content" />
			<TopHeadlines />
		</ThemeProvider>
	)
}

export default App
