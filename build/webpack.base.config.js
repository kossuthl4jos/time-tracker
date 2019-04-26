const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

const lintLoader = 'eslint-loader?failOnError=true';
const cssLoaders = ['vue-style-loader', CssExtractPlugin.loader, 'css-loader?sourceMap', 'postcss-loader?sourceMap'];
const babelInclude = projectPaths('src', 'test');

module.exports = {
	resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src'),
			'test': path.resolve(__dirname, '../test')
		},
		extensions: ['*', '.js', '.vue', '.json'],
		mainFiles: ['index', 'index.vue']
	},
	resolveLoader: {
		modules: [path.resolve(__dirname, 'app'), 'node_modules']
	},
	module: {
		rules: [
			{ test: /\.vue$/, loader: lintLoader, enforce: 'pre', exclude: /node_modules/ }, // Lint local .vue files first
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.js$/, use: ['babel-loader', lintLoader], include: babelInclude },
			{ test: /\.css$/, use: cssLoaders },
			{ test: /\.less$/, use: cssLoaders.concat('less-loader?sourceMap') },
			{ test: /\.(scss|sass)$/, use: cssLoaders.concat(['resolve-url-loader', 'sass-loader?sourceMap']) },
			{ test: /\.woff(2)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]' },
			{ test: /\.(ttf|eot|svg)$/, loader: 'file-loader?name=fonts/[hash].[ext]' }
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new CssExtractPlugin({ filename: '[name]-[hash].css', chunkFilename: '[id]-[hash].css' }),
		new HtmlWebpackPlugin({ template: 'src/index.html' })
	],
	devtool: '#source-map'
};

function projectPaths(...rootPaths) {
	const toAbsolute = rootRelative => path.resolve(__dirname, '../' + rootRelative);
	return rootPaths.map(toAbsolute);
}
