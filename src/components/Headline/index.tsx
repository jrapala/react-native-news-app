import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

const Headline: React.FC = ({ children }) => {
	return <HeadlineText>{children}</HeadlineText>
}

const HeadlineText = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: 20px;
	font-weight: 600;
	margin-top: 5%;
`

export default Headline
