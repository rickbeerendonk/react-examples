// To run:
// - Install node.js
// - Open command line / terminal and type: node static-file-server.js

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var port = process.argv[2] || 8080;

http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
    if (!exists) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if (err) {        
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log(`Server running at: http://localhost:${port}\nCTRL+C to shutdown`);