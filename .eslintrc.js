module.exports = {
	root: true,
	extends: [
		"@react-native-community",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:jest/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react-native/all",
		"plugin:react-native-a11y/all",
		"prettier/react",
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"better-styled-components",
		"import",
		"prettier",
	],
	rules: {
		quotes: [1, "double", { allowTemplateLiterals: true }],
		semi: ["warn", "never"],
		"no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
		"sort-keys": ["warn", "asc", { caseSensitive: false, natural: true }],
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/member-delimiter-style": 0,
		"better-styled-components/sort-declarations-alphabetically": 1,
		"prettier/prettier": "warn",
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react/prop-types": 0,
		"react-native/no-raw-text": 0,
		"react-native/sort-styles": "warn",
		"import/no-named-as-default-member": 0,
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				// Shutting off to speed development
				// "@typescript-eslint/explicit-function-return-type": ["error"],
			},
		},
	],
}
