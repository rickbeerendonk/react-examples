/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global process, require */
/* eslint-disable no-console */

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const portHttp = process.argv[2] || 8080;
const portRest = +portHttp + 1;
let filePath = process.argv[3];
const basePath = process.cwd();

//console.log('portHttp: ' + portHttp);
//console.log('portRest: ' + portRest);
//console.log('filePath: ' + filePath);
//console.log('basePath: ' + basePath);

// Exit if no filePath is given
if (!filePath || !filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  console.warn('No file path to open.');
  process.exit();
}

const serverUri = `http://localhost:${portHttp}`;
const extraPath = filePath.substring(basePath.length);
const extraUri = extraPath.split('\\').join('/');
const totalUri = `${serverUri}${extraUri}`;

//console.log('serverUri: ' + serverUri);
//console.log('extraPath: ' + extraPath);
//console.log('extraUri: ' + extraUri);
//console.log('totalUri: ' + totalUri);

// Start server
// See: https://github.com/indexzero/http-server/
const httpChild = childProcess.spawn('http-server', ['.', '-p', portHttp, '-c-1'], {shell: true, stdio: 'inherit'});

// Open browser
const command = process.platform === 'win32' ? `start "" "${totalUri}"` :
              /* process.platform === "darwin" */ `open "${totalUri}"`;
childProcess.exec(command);

//childProcess.exec(command, () => { console.log('exit'); process.exit(); });
