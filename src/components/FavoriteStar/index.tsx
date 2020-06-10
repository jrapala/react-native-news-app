import React, { useContext } from "react"
import { TouchableOpacity, GestureResponderEvent } from "react-native"
import { ThemeContext } from "styled-components/native"
import { Icon } from "react-native-elements"

interface Props {
	isFavorited: boolean
	onPress: ((event: GestureResponderEvent) => void) | undefined
}

const FavoriteStar: React.FC<Props> = ({ isFavorited, onPress }) => {
	const themeContext = useContext(ThemeContext)

	return (
		<TouchableOpacity onPress={onPress}>
			<Icon
				name={isFavorited ? "star" : "star-border"}
				type="materialicon"
				color={
					isFavorited
						? themeContext.starSelectedColor
						: themeContext.starUnselectedColor
				}
				size={30}
			/>
		</TouchableOpacity>
	)
}

export default FavoriteStar
