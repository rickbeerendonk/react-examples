/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global process, require */
/* eslint-disable no-console */

const childProcess = require('child_process');

const portHttp = process.argv[2] || 8080;
//const portRest = +portHttp + 1;
let filePath = process.argv[3];
const basePath = process.cwd();

//console.log('portHttp: ' + portHttp);
//console.log('portRest: ' + portRest);
//console.log('filePath: ' + filePath);
//console.log('basePath: ' + basePath);

// If filePath is given, we'll open that path in the browser
let extraUri = '';
if (filePath && filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  const extraPath = filePath.substring(basePath.length);
  extraUri = extraPath.split('\\').join('/');
}

const serverUri = `http://localhost:${portHttp}`;
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
const browserChild = childProcess.spawn(command, {shell: true, stdio: 'inherit'});

//childProcess.exec(command, () => { console.log('exit'); process.exit(); });
