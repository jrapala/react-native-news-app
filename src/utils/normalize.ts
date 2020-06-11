import { Dimensions, Platform, PixelRatio } from "react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

// Based on iPhone 5s's scale
const scale = SCREEN_WIDTH / 320

const checkIfTablet = (): boolean => {
	const pixelDensity = PixelRatio.get()
	const adjustedWidth = SCREEN_WIDTH * pixelDensity
	const adjustedHeight = SCREEN_WIDTH * pixelDensity
	if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
		return true
	} else {
		return (
			pixelDensity === 2 &&
			(adjustedWidth >= 1920 || adjustedHeight >= 1920)
		)
	}
}

export default function normalize(size: number): number {
	const isTablet = checkIfTablet()
	const newSize = isTablet ? (size * scale) / 2 : size * scale
	if (Platform.OS === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
}
