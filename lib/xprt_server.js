var http      = require('http'),
    path      = require('path'),
    express   = require('express');
    

module.exports = function (opts) {
	var app = express();
	app.set('port', opts.port || 5000);
	app.set('views', path.join(process.cwd(), 'public'));
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	// app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(express.compress());
	app.use(app.router);
	app.use(express.static(path.join(process.cwd(), 'public')));
	
	if (app.get('env') === 'development') {
	  app.use(express.errorHandler());
	}
	
	function index(req, res) {
	  res.render('index');
	}
	
	app.get('/', index);
	
	
	app.get(/^\/?[A-Za-z0-9\/_]+$/, index);
	
	var server = http.createServer(app).listen(app.get('port'), function() {
	  console.log('Xprt server listening on port ' + app.get('port'));
	});

	return server;
};