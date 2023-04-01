module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:@next/next/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 13,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'object-curly-spacing': 'off',
		'comma-dangle': 'off',
		'react/no-unescaped-entities': 'off'
	},
	settings: {
		version: 'detect'
	}
};
