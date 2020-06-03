module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"prettier/react",
		"plugin:react/recommended",
		"plugin:react-native/all",
		"plugin:react-hooks/recommended",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"@react-native-community",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "import", "prettier"],
	rules: {
		quotes: [1, "double", { allowTemplateLiterals: true }],
		semi: ["warn", "never"],
		"sort-keys": ["warn", "asc", { caseSensitive: false, natural: true }],
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"prettier/prettier": "warn",
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react-native/sort-styles": "warn",
		"import/no-named-as-default-member": 0,
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			// excludeFiles: ["*.js", "*.jsx"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["error"],
			},
		},
	],
}
