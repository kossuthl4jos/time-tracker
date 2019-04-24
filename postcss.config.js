const presetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		presetEnv({
			browsers: ['last 2 versions', 'ie >= 11'],
			stage: 3
		})
	]
};

