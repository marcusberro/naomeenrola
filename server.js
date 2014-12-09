var connect = require('connect'),
	serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(process.env.OPENSHIFT_NODEJS_PORT || 8080);

console.log('Express server listening on port ' + (process.env.OPENSHIFT_NODEJS_PORT || 8080));