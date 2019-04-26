const proxy = require('express-http-proxy');
const proxyConfig = require('./proxy.config');

module.exports = function setupApi(app) {
	app.use('/api', proxy(proxyConfig.apiHost, { preserveHostHdr: true }));
};
