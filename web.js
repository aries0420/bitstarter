var express = require('express');

var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World 2!');
// });

var fs = require('fs');

fs.readFile('~/startupeng/bitstarter/index.html', function (err) {
  if (err) throw err;
  console.log(buf.toString("Hello World from index.html", 0, "utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
