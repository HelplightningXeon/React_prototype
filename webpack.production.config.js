var webpack = require('webpack');

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
	    { test: /\.jsx$/, exclude: /node_modules/, loaders: ["babel-loader", "jsx-loader?harmony"]},
	    { test: /\.scss$/, include: /src/, loaders: ["style", "css", "sass?outputStyle=expanded"]}
	]
    },
    plugins: [
	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
}
