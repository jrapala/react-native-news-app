import "react-native-gesture-handler"
import React, { useContext, useState } from "react"
import { StatusBar } from "react-native"
import { ThemeProvider, ThemeContext } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { iOSDarkTheme } from "./styles"
import TopHeadlines from "./views/TopHeadlines"
import HeadlineDetails from "./views/HeadlineDetails"

const Stack = createStackNavigator()

const StackNavigator: React.FC = () => {
	const themeContext = useContext(ThemeContext)

	return (
		<Stack.Navigator initialRouteName="TopHeadlines">
			<Stack.Screen
				name="TopHeadlines"
				component={TopHeadlines}
				options={{ headerTransparent: true, title: "" }}
			/>
			<Stack.Screen
				name="HeadlineDetails"
				component={HeadlineDetails}
				options={{
					headerBackTitleStyle: { color: themeContext.highlight },
					headerTintColor: themeContext.highlight,
					headerTransparent: true,
					title: "",
				}}
			/>
		</Stack.Navigator>
	)
}

const App: React.FC = () => {
	const [theme] = useState(iOSDarkTheme)

	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="dark-content" />
				<StackNavigator />
			</ThemeProvider>
		</NavigationContainer>
	)
}

export default App
