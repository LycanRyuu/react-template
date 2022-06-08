// const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	target: "web",
	devtool: "cheap-module-source-map",
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},
	devServer: {
		historyApiFallback: true,
		headers: { "Access-Control-Allow-Origin": "*" },
		https: false,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								localIdentName:
									"[name]__[local]__[hash:base64:5]",
							},
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								ident: "postcss",
								plugins: [require("autoprefixer")],
							},
						},
						// options: {
						// 	ident: "postcss",
						// 	plugins: [require("autoprefixer")],
						// },
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: "url-loader",
				options: {
					limit: 8000,
					name: "images/[name].[ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			inject: "body",
		}),
	],
};
