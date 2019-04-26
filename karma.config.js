const webpackConfig = require('./build/webpack.test.config');

module.exports = function(config) {
	config.set({
		frameworks: ['mocha', 'sinon-chai'],
		files: [
			'test/index.js'
		],
		preprocessors: {
			'test/index.js': ['webpack', 'sourcemap']
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			stats: 'errors-only'
		},

		plugins: [
			'karma-webpack',
			'karma-sourcemap-loader',
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-sinon-chai',
			'karma-coverage',
			'karma-spec-reporter'
		],

		reporters: ['spec', 'coverage'],
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'text' },
				{ type: 'text-summary' },
				{ type: 'cobertura' }
			]
		},

		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: true,
		concurrency: Infinity
	});
};
