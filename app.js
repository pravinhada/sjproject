var express = require('express');
var fs = require('fs');
var htmlFile = "index.html";

var app = express();

/* serving static file */
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/data',express.static('config'));

/* main page */
app.get('/', function(request, response) {
    var buffer = fs.readFileSync(htmlFile);
    var content = buffer.toString();
    response.send(content);
});

/* download pages */
app.get('/downloads', function(req, res){
	var buffer = fs.readFileSync("pages/downloads.html");
	var content = buffer.toString();
	res.send(content);
});

/* about page */
app.get('/about', function(req, res){
	var buffer = fs.readFileSync("pages/about.html");
	var content = buffer.toString();
	res.send(content);
});

/* contact page */
app.get('/contact', function(req, res){
	var buffer = fs.readFileSync("pages/contact.html");
	var content = buffer.toString();
	res.send(content);
});

/* listen the server at port 8080 */
var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server Listening at http://%s:%s ", host, port);
});
