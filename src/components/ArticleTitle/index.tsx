import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

import normalize from "../../utils/normalize"

const ArticleTitle: React.FC = ({ children }) => {
	return <Title>{children}</Title>
}

const Title = styled(Text)`
	color: ${(props): string => props.theme.primaryFontColor};
	font-size: ${normalize(15) + "px"};
	font-weight: 600;
	margin-top: 5%;
`

export default ArticleTitle
