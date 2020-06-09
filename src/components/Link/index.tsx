import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

interface Props {
	alignment: string
}

const Link: React.FC<Props> = ({ alignment, children }) => {
	return <LinkText alignment={alignment}>{children}</LinkText>
}

const LinkText = styled(Text)<Props>`
	color: ${(props): string => props.theme.highlight};
	font-size: 17px;
	font-weight: 500;
	margin-top: 5%;
	text-align: ${props => props.alignment};
`

export default Link
