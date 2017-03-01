/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

// TO RUN:
// - Install node.js (version 6 or later)
// - Open command line / terminal and type: node static-file-server.js

/* global require, process */
/* eslint-disable no-console */

let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");
let childProcess = require("child_process");

let port = process.argv[2] || 8080;
let filePath = process.argv[3];
let basePath = process.cwd();

http.createServer(function(request, response) {
  let uri = url.parse(request.url).pathname;
  let decodeUri = decodeURIComponent(uri);
  let filename = path.join(basePath, decodeUri);
  
  fs.exists(filename, function(exists) {
    if (!exists) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) {
      filename = path.join(filename, 'index.html');
    }

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

let serverUri = `http://localhost:${port}/`;

console.log(`Server for folder: ${basePath}
Server running at: ${serverUri}
CTRL+C to shutdown`);

// Extra
// If a filePath is given, open a browser at this location.
if (filePath.startsWith(basePath)) {
  if (fs.statSync(filePath).isDirectory()) {
    filePath += '/';
  }

  let extraPath = filePath.substring(basePath.length);
  let extraUri = `${serverUri}${extraPath}`;

  let command = process.platform === "win32" ? `start "" "${extraUri}"` :
                /* process.platform === "darwin" */ `open "${extraUri}"`;
  
  childProcess.exec(command, () => { process.exit; });
}