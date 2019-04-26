const setupApi = require('../server/setup-api');

module.exports = {
	compress: true,
	hot: true,
	port: 3000,
	before: setupApi
};
