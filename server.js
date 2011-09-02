var http = require('http');
var sys  = require('sys');
var fs   = require('fs');
//var md = require("node-markdown").Markdown;

//using express framework
var express = require('express');
var app = express.createServer();

//creating redis server

if (process.env.REDISTOGO_URL) {
  // heroku config
	var rtg   = require("url").parse(process.env.REDISTOGO_URL);
	var redis = require("redis").createClient(rtg.port, rtg.hostname);
	redis.auth(rtg.auth.split(":")[1]);
	
} else {
	var r=require("redis");
  var redis = r.createClient();
}


//express settings
app.use(express.bodyParser());
app.set('view options', {
  layout: false
});
app.use(express.static(__dirname + '/public'));


//routing

app.post('/save', function(req, res){
	var substring=req.body.content.substr(0, 10) + (Date.now());
	var encoded_string= (new Buffer(substring)).toString('base64');
	redis.set(encoded_string , req.body.content);
	//res.send("the url is... " + __dirname + "/"+ encoded_string);
	var url="/"+encoded_string;
	res.redirect(url);
})

app.get('/:url', function(req, res){
	redis.get(req.params.url, function(err, reply){
		res.render('show.ejs', { content: reply });
	});	
});

app.get('/', function(req, res){
   res.render('index.ejs', { title: 'My Site' });
});





//sshhhh! listen! 
app.listen(process.env.PORT || 4000);


