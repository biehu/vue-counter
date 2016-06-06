var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/main.js',
	
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader'
			}
		]
	},
	
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	
	resolve: {
        extensions: ['', '.js', '.vue']
    }
}

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	];
} else {
	module.exports.devtool = '#source-map';
}
