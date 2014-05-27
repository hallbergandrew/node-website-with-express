var express = require('express');
var http = require('http');
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

var fortune = require('./lib/fortune.js');

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

app.use(express.static(__dirname + '/public'));


app.get('/', function(req,res) {
  res.render('home');
});

app.get('/about', function(req,res) {
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
     } );
});

app.get('/tours/hood-river', function(req,res){
  res.render('tours/hood-river');
});
app.get('/tours/oregon-coast', function(req,res){
  res.render('tours/oregon-coast');
});

app.get('/tours/request-group-rate', function(req,res){
  res.render('tours/request-group-rate');
});
// catch-all handler (middleware)
app.use(function(req,res,next){
  res.status(404);
  res.render('404');
});


http.createServer(app).listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
		 app.get('port') + '; press Ctrl-C to terminate.' );
});


