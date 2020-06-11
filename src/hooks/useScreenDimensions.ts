import { useEffect, useState } from "react"
import { Dimensions, ScaledSize } from "react-native"

interface ScreenDimensions extends ScaledSize {
	isLandscape: boolean
}

const useScreenDimensions = (): ScreenDimensions => {
	const [screenData, setScreenData] = useState(Dimensions.get("screen"))

	useEffect(() => {
		const handleChange = (result: {
			window: ScaledSize
			screen: ScaledSize
		}): void => {
			setScreenData(result.screen)
		}

		Dimensions.addEventListener("change", handleChange)

		return (): void =>
			Dimensions.removeEventListener("change", handleChange)
	})

	return {
		...screenData,
		isLandscape: screenData.width > screenData.height,
	}
}

export default useScreenDimensions
