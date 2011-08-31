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


