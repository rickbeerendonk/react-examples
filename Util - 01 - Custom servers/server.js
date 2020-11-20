/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global __dirname, process */
/* eslint-disable no-console */

const childProcess = require('child_process');
const path = require('path');

const [, , portHttp = 8080, filePath] = process.argv;
const basePath = process.cwd();

// If filePath is given, we'll open that path in the browser
let extraUri = '';
if (filePath && filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  const extraPath = filePath.substring(basePath.length);
  extraUri = extraPath.split('\\').join('/');
}

const serverUri = `http://localhost:${portHttp}`;
const totalUri = `${serverUri}${extraUri}${
  extraUri[extraUri.length - 1] !== '/' && '/'
}`.replace(/\s+/g, '%20');

// Start server
// See: https://www.npmjs.com/package/serve
/* const httpChild = */ childProcess.spawn(
  'serve',
  [
    '--listen',
    portHttp,
    '--config',
    //'".\\Util - 01 - Custom servers\\serve.json"'
    `"${path.join(__dirname, 'serve.json')}"`
  ],
  { shell: true, stdio: 'inherit' }
);

// Open browser
let command =
  process.platform === 'win32'
    ? `start "" "${totalUri}"`
    : /* process.platform === "darwin" */ `open "${totalUri}"`;

console.log(command);
//command = 'open "http://google.com test"';

// Use timeout so the server is ready.
setTimeout(function () {
  childProcess.spawn(command, {
    shell: true,
    stdio: 'inherit'
  });
}, 200);

//childProcess.exec(command, () => { console.log('exit'); process.exit(); });
