import { Dimensions, Platform, PixelRatio } from "react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

// Based on iPhone 5S's scale
const scale = SCREEN_WIDTH / 320

export default function normalize(size: number) {
	const newSize = size * scale
	if (Platform.OS === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
}
