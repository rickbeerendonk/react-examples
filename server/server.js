/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { spawn, spawnSync } from 'child_process';
import { createServer } from 'http';
import { existsSync, lstatSync, statSync, readdirSync, readFile } from 'fs';
import { join, dirname } from 'path';
import { contentType, lookup } from 'mime-types';

let [, , ...filePath] = process.argv;
// Windows fix:
filePath = filePath.join(' ').replaceAll('\\\\', '\\');

/*** Helper functions ***/

function findFileInPath(directory, file) {
  const filename = join(directory, file);
  if (existsSync(filename)) {
    return filename;
  } else {
    const basename = dirname(directory);
    return basename && basename !== directory
      ? findFileInPath(basename, file)
      : null;
  }
}

function isDirectory(dirPath) {
  return existsSync(dirPath) && lstatSync(dirPath).isDirectory();
}

function openBrowser(uri) {
  const command =
    process.platform === 'win32' ? `start "" "${uri}"` : `open "${uri}"`;

  spawn(command, {
    shell: true,
    stdio: 'inherit'
  });
}

/*** Main functions ***/

/// Is Angular project? ///

if (filePath && statSync(filePath).isDirectory()) {
  const angularConfigNames = ['angular.json'];
  const angularConfigPath = angularConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (angularConfigPath) {
    // Angular config exists, so execute npm start
    console.log('angular');
    console.log('angular config: ' + angularConfigPath);
    spawnSync('npm', ['start'], {
      cwd: dirname(angularConfigPath),
      shell: true,
      stdio: 'inherit'
    });
    console.log('angular done');
    process.exit();
  }
}

/// Is Vite project? ///

if (filePath && statSync(filePath).isDirectory()) {
  const viteConfigNames = ['vite.config.js', 'vite.config.ts'];
  const viteConfigPath = viteConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (viteConfigPath) {
    // Vite config exists, so execute npm start
    console.log('vite');
    console.log('vite config: ' + viteConfigPath);
    spawnSync('npm', ['run', 'dev', '--', '--open'], {
      cwd: dirname(viteConfigPath),
      shell: true,
      stdio: 'inherit'
    });
    console.log('vite done');
    process.exit();
  }
}

/// Other ///

const basePath = process.cwd();

// If filePath is given, we'll open that path in the browser
let extraUri = '';
if (filePath && filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  extraUri = filePath.substring(basePath.length).split('\\').join('/');
}

const server = createServer(function (request, response) {
  // Log request
  //console.log('Request:', request.url);

  let filePath = join(basePath, decodeURI(request.url));
  let isDirPath = isDirectory(filePath);

  if (isDirPath) {
    // Redirect to prevent issues when requesting files
    if (filePath.substr(-1) != '/') {
      response.writeHead(302, { Location: request.url.replace(/\/?$/, '/') });
      response.end();
      return;
    } else {
      // Go to parent if it contains 'index.html'
      if (
        !existsSync(join(filePath, 'index.html')) &&
        findFileInPath(filePath, 'index.html')
      ) {
        response.writeHead(302, { Location: `${request.url}..` });
        response.end();
        return;
      } else {
        // Get default files in directories:
        if (existsSync(join(filePath, 'index.html'))) {
          filePath = join(filePath, 'index.html');
          isDirPath = false;
        }
        if (existsSync(join(filePath, 'index.js'))) {
          filePath = join(filePath, 'index.js');
          isDirPath = false;
        }
      }
    }
  }

  if (isDirPath) {
    // Response with list of directories in this directory
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(
      `<ul>
        ${
          // Link to: Parent
          request.url !== '/'
            ? '<li>...<a href="..">Go to Parent</a>...</li>'
            : ''
        }
        ${
          // Links to: Directories
          readdirSync(filePath, { withFileTypes: true })
            .filter(
              dirent =>
                dirent.isDirectory() &&
                ![
                  '.git',
                  '.vscode',
                  'node_modules',
                  'resources',
                  'server'
                ].includes(dirent.name)
            )
            .map(
              dirent =>
                `<li><a href="${encodeURI(`./${dirent.name}/`)}">${
                  dirent.name
                }</a></li>`
            )
            .join('')
        }
      </ul>`,
      'utf-8'
    );
  } else {
    readFile(filePath, function (error, content) {
      if (error) {
        if (error.code === 'ENOENT') {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end('<p style="color: red">404 File not Found</p>', 'utf-8');
        } else {
          response.writeHead(500, { 'Content-Type': 'text/html' });
          response.end(
            `<p style="color: red">Internal server error: ${error.code}</p>
               ${content}`,
            'utf-8'
          );
        }
      } else {
        response.writeHead(200, {
          'Content-Type': contentType(lookup(filePath))
        });
        response.end(content, 'utf-8');
      }
    });
  }
});

server.listen().on('listening', () => {
  const serverUri = `http://localhost:${server.address().port}`;
  const totalUri = `${serverUri}${extraUri}${
    extraUri[extraUri.length - 1] !== '/' && '/'
  }`.replace(/\s+/g, '%20');

  console.log(
    '\x1b[35m' /* Foreground Magenta */,
    'Server listening at',
    '\x1b[1m' /* bold */,
    serverUri,
    '\x1b[0m' /* reset */
  );

  openBrowser(totalUri);
});
