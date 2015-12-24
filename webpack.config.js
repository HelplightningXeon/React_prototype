module.exports = {
    entry: [
        './src/javascripts/entry.js.jsx'
    ],
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
    externals: {
	"jquery": "jQuery"
    },
    devtool: "#inline-source-map"
}
