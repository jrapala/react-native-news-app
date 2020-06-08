module.exports = {
	processors: ["stylelint-processor-styled-components"],
	extends: [
		"stylelint-config-recommended",
		"stylelint-config-styled-components",
	],
	rules: {
		"property-no-unknown": [
			true,
			{
				ignoreProperties: [
					"shadow-color",
					"shadow-opacity",
					"shadow-offset",
					"shadow-radius",
					"padding-horizontal",
					"padding-vertical",
					"margin-vertical",
					"margin-horizontal",
					"tint-color",
					"aspect-ratio",
					"elevation",
				],
			},
		],
	},
}
