import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

const Link: React.FC = ({ children }) => {
	return <LinkText>{children}</LinkText>
}

const LinkText = styled(Text)`
	color: ${(props): string => props.theme.highlight};
	font-size: 17px;
	font-weight: 500;
	margin-top: 5%;
	text-align: right;
`

export default Link
