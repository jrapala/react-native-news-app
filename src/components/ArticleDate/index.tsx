import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

interface Props {
	publishDate: string | null
}

const ArticleDate: React.FC<Props> = ({ publishDate }) => {
	const dateOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	}

	const dateString = publishDate
		? new Date(Date.parse(publishDate)).toLocaleDateString(
				undefined,
				dateOptions
		  )
		: ""

	return <DateText>{dateString}</DateText>
}

const DateText = styled(Text)`
	color: ${(props): string => props.theme.secondaryFontColor};
	font-size: 17px;
	font-weight: 400;
	margin-top: 8px;
`

export default ArticleDate
