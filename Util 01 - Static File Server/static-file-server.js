/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

// TO RUN:
// - Install node.js (version 6 or later)
// - Open command line / terminal and type: node static-file-server.js

/* global require, process */
/* eslint-disable no-console */

const fs = require('fs');
const http = require('http');
const mime = require('mime-types');
const path = require('path');
const url = require('url');
const childProcess = require('child_process');

const basePath = process.cwd();
const port = process.argv[2] || 8080;
let filePath = process.argv[3];

http
  .createServer(function(request, response) {
    let uri = url.parse(request.url).pathname;
    let decodeUri = decodeURIComponent(uri);
    let filename = path.join(basePath, decodeUri);

    if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) {
      filename = path.join(filename, 'index.html');
      if (!fs.existsSync(filename) && uri.length > 1) {
        response.writeHead(302, {
          Location: '..'
        });
        response.end();
        return;
      }
    }

    if (!fs.existsSync(filename)) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    fs.readFile(filename, 'binary', function(err, file) {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write(err + '\n');
        response.end();
        return;
      }

      const mimetype = mime.contentType(path.extname(filename));
      response.writeHead(200, { 'Content-Type': mimetype });
      response.write(file, 'binary');
      response.end();
    });
  })
  .listen(parseInt(port, 10));

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

  let command =
    process.platform === 'win32'
      ? `start '' '${extraUri}'`
      : /* process.platform === 'darwin' */ `open '${extraUri}'`;

  childProcess.exec(command, () => {
    process.exit;
  });
}
