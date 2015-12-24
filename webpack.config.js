var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/javascripts/entry.js.jsx',
	vendors: ['react']
    },
    output: {
        path: __dirname + '/assets/',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
	loaders: [
	    { test: /\.jsx$/, exclude: /node_modules/, loaders: ["babel-loader"]},
	    { test: /\.scss$/, include: /src/, loader: ExtractTextPlugin.extract('css!sass')},
	    { test: /\.css$/, include: /src/, loaders: ["style", "css"]},
	    {
		test: /\.(png|jpg|svg|gif)$/, include: /src/,
		loader: 'url'
	    },
	    {
		test: /\.(woff|eot|ttf)/,
		loader: 'url?limit=100000'
	    }
	]
    },
    devtool: "#source-map",
    plugins: [
	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
	new ExtractTextPlugin('bundle.css', {
	    allChunks: true
	})
    ]
}
