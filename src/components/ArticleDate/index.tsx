import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

import { getDateString } from "../../utils/dateHelpers"

interface Props {
	publishDate: string | null
}

const ArticleDate: React.FC<Props> = ({ publishDate }) => {
	return <DateText>{getDateString(publishDate)}</DateText>
}

const DateText = styled(Text)`
	color: ${(props): string => props.theme.secondaryFontColor};
	font-size: 17px;
	font-weight: 400;
	margin-top: 8px;
`

export default ArticleDate
