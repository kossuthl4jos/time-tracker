const proxy = require('express-http-proxy');
const { apiHost } = require('./proxy.config');

module.exports = function setupApi(app) {
	/* Any request starting with /api will be proxied to the API host with headers included.
	 * This way the API server does not have to allow cross origin requests. */
	app.use('/api', proxy(apiHost, { preserveHostHdr: true }));

	/* For the sake of this example the Chuck Norris joke REST API is also set.
	 * The only reason publicPath is used here is to make this example work out of the box.
	 * Normally the server does not need to know about it. */
	const publicPath = process.env.PUBLIC_PATH || process.env.npm_package_config_default_public_path;
	app.use(publicPath + 'joke-api', proxy('http://api.icndb.com'));
};
