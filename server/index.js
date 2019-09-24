const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');
const compression = require('compression');
const app = express();

const publicPath = process.env.PUBLIC_PATH || process.env.npm_package_config_default_public_path;
console.log(`Serving content from public path ` + publicPath);
const root = path.resolve(__dirname, '../dist');

// setupApi(app); --> possible proxy, check setup-api.js
app.use((req, res, next) => {
  res.header('Cache-Control', 'max-age=1');
	next();
});
app.use(compression()); // attempts to compress response bodies


app.use(publicPath, express.static(root));
app.use(publicPath, fallback('index.html', { root }));

app.use('^/$', (req, res) => { res.redirect(publicPath); });

app.listen(process.env.PORT || 3000, () => {
  console.log('eagerly listening on: ', process.env.PORT || 3000);
});
