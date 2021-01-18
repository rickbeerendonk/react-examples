/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global __dirname, process */
/* eslint-disable no-console */

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const [, , portHttp = 8080, filePath] = process.argv;

/*** Helper functions ***/

function findFileInPath(directory, file) {
  const filename = path.join(directory, file);
  if (fs.existsSync(filename)) {
    return filename;
  } else {
    const basename = path.dirname(directory);
    return basename && basename !== directory
      ? findFileInPath(basename, file)
      : null;
  }
}

/*** Main functions ***/

/// Is Webpack project? ///

if (filePath && fs.statSync(filePath).isDirectory()) {
  const webpackConfigNames = ['webpack.config.js', 'webpack.dev.js'];
  const webpackConfigPath = webpackConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (webpackConfigPath) {
    // Webpack config exists, so execute webpack
    console.log('webpack');
    console.log('webpack config: ' + webpackConfigPath);
    childProcess.spawnSync(
      'webpack-dev-server',
      ['--config', `"${webpackConfigPath}"`, '--open', '--port', portHttp],
      {
        cwd: path.dirname(webpackConfigPath),
        shell: true,
        stdio: 'inherit'
      }
    );
    console.log('webpack done');
    process.exit();
  }
}

/// No Webpack ///

const basePath = process.cwd();

// If filePath is given, we'll open that path in the browser
let extraUri = '';
if (filePath && filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  extraUri = filePath.substring(basePath.length).split('\\').join('/');
}

const serverUri = `http://localhost:${portHttp}`;
const totalUri = `${serverUri}${extraUri}${
  extraUri[extraUri.length - 1] !== '/' && '/'
}`.replace(/\s+/g, '%20');

// Start server
childProcess.spawn(
  'serve',
  ['--listen', portHttp, '--config', `"${path.join(__dirname, 'serve.json')}"`],
  { shell: true, stdio: 'inherit' }
);

// Open browser
// Use timeout so the server is ready.
setTimeout(function () {
  const command =
    process.platform === 'win32'
      ? `start "" "${totalUri}"`
      : `open "${totalUri}"`;

  childProcess.spawn(command, {
    shell: true,
    stdio: 'inherit'
  });
}, 200);
