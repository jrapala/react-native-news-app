import React from "react"
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from "react-native"

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen"

declare const global: { HermesInternal: null | {} }

const App: React.FC = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}
				>
					<Header />
					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}>Engine: Hermes</Text>
						</View>
					)}
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Step One</Text>
							<Text style={styles.sectionDescription}>
								Edit{" "}
								<Text style={styles.highlight}>App.tsx</Text> to
								change this screen and then come back to see
								your edits.
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>
								See Your Changes
							</Text>
							<Text style={styles.sectionDescription}>
								<ReloadInstructions />
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Debug</Text>
							<Text style={styles.sectionDescription}>
								<DebugInstructions />
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Learn More</Text>
							<Text style={styles.sectionDescription}>
								Read the docs to discover what to do next:
							</Text>
						</View>
						<LearnMoreLinks />
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: Colors.white,
	},
	engine: {
		position: "absolute",
		right: 0,
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: "600",
		padding: 4,
		paddingRight: 12,
		textAlign: "right",
	},
	highlight: {
		fontWeight: "700",
	},
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionDescription: {
		color: Colors.dark,
		fontSize: 18,
		fontWeight: "400",
		marginTop: 8,
	},
	sectionTitle: {
		color: Colors.black,
		fontSize: 24,
		fontWeight: "600",
	},
})

export default App
