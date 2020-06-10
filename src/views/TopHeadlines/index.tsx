import React from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"

import Headlines from "../../components/Headlines"

const TopHeadlines: React.FC = () => {
	return (
		<StyledSafeAreaView>
			<Container>
				<H1>Top Headlines</H1>
				<Headlines />
			</Container>
		</StyledSafeAreaView>
	)
}

const StyledSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	background-color: ${(props): string => props.theme.backgroundColor};
	flex: 1;
`

const Container = styled(View)`
	flex: 1;
	margin-top: 5%;
	width: 80%;
`

const H1 = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: 34px;
	font-weight: 700;
`

export default TopHeadlines
