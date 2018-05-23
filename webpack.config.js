var debug             = process.env.NODE_ENV !== "production";
var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  node: {
    __dirname: true,
    __filename: false
  },
  devtool: debug ? "inline-sourcemap" : null,
  entry: { 
    main: ["./client/main.js"]
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
          test: /\.scss$/,
          exclude: '/node_modules/',
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].css'
							}
						},
						{
							loader: 'extract-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				}
    ]
  },
  plugins: debug ? [
      new ExtractTextPlugin({
        filename: '[name].min.css',
        allChunks: true,
        disable: false
      })
    ] : [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
      disable: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};