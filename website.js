var express = require('express');
var http = require('http');
var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set( 'port', 3000 );

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('home');
});
  app.get('/about', function(req,res) {
    var randomFortune =
        fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
  res.render('about', { fortune: randomFortune} );
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

var fortuneCookies = [
  'You are a dreamer, keep dreaming.',
  'A beautiful other will soon show interest.',
  'There is a large prize on the horizon.',
  'More people in the world are following your actions.',
  'This is the first day of the rest of your life.'

];
