#Babel CLI

To be able to compile React ES201X source code with [Babel](http://babeljs.io), a number of steps have to be taken.

First we've created a website in the `site` folder. This folder has the following structure:
```
site
├─ index.html
├─ build
└─ src
   └─ app.jsx
```

After compilation, the `build` folder will contain:
* `app.js`, which is used by `index.html` to run the website.
* `app.js.map` if the `--source-maps` option is used during compile.

##Preparation

This folder already contains all that is needed to compile.

###package.json

Babel CLI and the ES2015 and React presets are installed into `package.json`:

1. [Babel CLI](http://babeljs.io/docs/setup/#babel_cli)
2. [Babel ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/)
3. [Babel React preset](http://babeljs.io/docs/plugins/preset-react/)

A build script is added to `package.json`.

###.babelrc

To indicate Babel that the presets should be used, `.babelrc` is created with the presets content.

##Install

Install all the dependencies by running the following command on the command line:
```sh
npm install
```

##Run

To compile once, type on the command line:
```sh
npm run build
```

To do an initial compile and let `Babel` compile every time a js-file changes:
```sh
npm run watch
```

###Alternative

Instead of using `npm` to run, we can also run directly on the command line. There are to scripts, one for OSX and one for Windows, to demonstrate this:

Mac OSX:
```sh
bash babel-watch.sh
```

Windows:
```bat
babel-watch.bat
```

##Source Maps

The compilation commands in this example contain the [`--source-maps` option](https://babeljs.io/docs/usage/cli/#compile-with-source-maps). This makes it possible to debug the original `app.jsx` file in the browser. Obviously this option should not be used in a production environment.
