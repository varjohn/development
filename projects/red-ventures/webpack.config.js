const path = require("path")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const entry = "./src/index.js"
const output = ""

module.exports = {
	watch:true,
	entry: entry,
	output: {
		path: path.resolve("./build/"),
		filename: "js/bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(s*)css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: "index.html" //relative to root of the application
		})
	]
}
