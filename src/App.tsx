import "react-native-gesture-handler"
import React, { useContext, useState } from "react"
import { StatusBar, YellowBox } from "react-native"
import { ThemeProvider, ThemeContext } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ApolloProvider } from "@apollo/react-hooks"

import { RootStackParamList } from "./types/navigation"
import { iOSDarkTheme } from "./styles"
import TopHeadlines from "./views/TopHeadlines"
import HeadlineDetails from "./views/HeadlineDetails"
import { FavoritesProvider } from "./utils/store"
import { client } from "./graphql/client"

const Stack = createStackNavigator<RootStackParamList>()

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

	// Ignore warning emitted from apollo-link-rest
	// Debug for another time..
	YellowBox.ignoreWarnings(["Require cycle:"])

	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="dark-content" />
				<ApolloProvider client={client}>
					<FavoritesProvider>
						<StackNavigator />
					</FavoritesProvider>
				</ApolloProvider>
			</ThemeProvider>
		</NavigationContainer>
	)
}

export default App
