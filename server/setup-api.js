const proxy = require('express-http-proxy');
const proxyConfig = require('./proxy.config');

//this could be used to proxy request to the app/api to somewhere else
module.exports = function setupApi(app) {
	app.use('/api', proxy(proxyConfig.apiHost, { preserveHostHdr: true }));
};
