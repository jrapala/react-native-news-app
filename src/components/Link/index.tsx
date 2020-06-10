import React from "react"
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native"
import styled from "styled-components/native"

interface Props {
	alignment: string
	onPress: ((event: GestureResponderEvent) => void) | undefined
}

interface ButtonTextProps {
	alignment: string
}

const Link: React.FC<Props> = ({ alignment, children, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<ButtonText alignment={alignment}>{children}</ButtonText>
		</TouchableOpacity>
	)
}

const ButtonText = styled(Text)<ButtonTextProps>`
	color: ${(props): string => props.theme.highlight};
	font-size: 17px;
	font-weight: 500;
	margin-top: 5%;
	text-align: ${(props): string => props.alignment};
`

export default Link
