var http = require('http');
var sys  = require('sys');
var fs   = require('fs');
var md = require("node-markdown").Markdown;
var string="*ciao* ciao ciao **ciao**"
var express = require('express');
var app = express.createServer();


app.use(express.bodyParser());
app.set('view options', {
  layout: false
});

app.post('/try', function(req, res){
		if (req.body.content == null){
			console.log("nothing to do here");
		}
		string=md(req.body.content);
		console.log(string);
	res.end('_testcb(\''+ string + '\')');

});



app.get('/', function(req, res){
   res.render('index.ejs', { title: 'My Site' });
});






app.listen(4000);
/*var server = http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
console.log("request accepted");
	response.end('_testcb(\'{"message": "Hello world!"}\')');
//	response.write(md(string));

});  // serves template.html to new clients


server.listen(process.env.PORT || 4000);*/


/*var io = require('socket.io').listen(server);

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

io.sockets.on('connection', function(client) {
	io.sockets.send(wallText);  // sends the current wall text to new clients

	client.on('message', function(message) { // called when a change is received from a client
		wallText = message;  // the new wall text is saved in the wallText variable
		client.broadcast.send(wallText);  // the new wall text is sent to all OTHER clients
	});
});*/

