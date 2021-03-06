module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				// modules: false,
				targets: {
					browserslist: ["> 1%", "last 2 versions"],
				},
			},
		],
		"@babel/preset-react",
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-class-properties",
	],
	env: {
		production: {
			only: ["src"],
			plugins: [
				[
					"transform-react-remove-prop-types",
					{
						removeImport: true,
					},
				],
				"@babel/plugin-transform-react-inline-elements",
				"@babel/plugin-transform-react-constant-elements",
			],
		},
	},
};
