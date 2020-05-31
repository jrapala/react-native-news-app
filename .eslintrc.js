module.exports = {
	root: true,
	extends: "@react-native-community",
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		quotes: [1, "double", { allowTemplateLiterals: true }],
		semi: ["warn", "never"],
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react-native/sort-styles": "warn",
		"sort-keys": ["warn", "asc", { caseSensitive: false, natural: true }],
	},
}
