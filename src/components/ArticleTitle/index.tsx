import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

const ArticleTitle: React.FC = ({ children }) => {
	return <Title>{children}</Title>
}

const Title = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: 20px;
	font-weight: 600;
	margin-top: 5%;
`

export default ArticleTitle
