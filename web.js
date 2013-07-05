//IW0-01
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');


app.get('/', function(request, response) {
  fs.readFile('/index.html',
    function(err, data) {
      if (err) {
	  response.writeHead(500);
          return response.end('Error loading index.html');
      }
      response.writeHead(200);
      response.end(data);
    }
  );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
