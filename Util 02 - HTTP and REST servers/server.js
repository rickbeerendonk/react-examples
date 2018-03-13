/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global process, require */
/* eslint-disable no-console */

const childProcess = require("child_process");
const fs = require("fs");

const portHttp = process.argv[2] || 8080;
const portRest = +portHttp + 1;
let filePath = process.argv[3];
const basePath = process.cwd();

//console.log('portHttp: ' + portHttp);
//console.log('portRest: ' + portRest);
//console.log('filePath: ' + filePath);
//console.log('basePath: ' + basePath);

// Extra
// If a filePath is given, open a browser at this location.
if (filePath.startsWith(basePath)) {
  if (fs.statSync(filePath).isDirectory()) {
    filePath += '/';
  }

  const serverUri = `http://localhost:${portHttp}`;
  const extraPath = filePath.substring(basePath.length);
  const extraUri = `${serverUri}${extraPath}`;

  //console.log('serverUri: ' + serverUri);
  //console.log('extraPath: ' + extraPath);
  //console.log('extraUri: ' + extraUri);

  // See: https://github.com/indexzero/http-server/

  const httpChild = childProcess.spawn('http-server', ['.', '-p', portHttp]);

  const command = process.platform === "win32" ? `start "" "${extraUri}"` :
                /* process.platform === "darwin" */ `open "${extraUri}"`;

  childProcess.exec(command);
  //childProcess.exec(command, () => { console.log('exit'); process.exit(); });
}
