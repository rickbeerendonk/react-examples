# ClojureScript + React

## Setup

This is a complete **ClojureScript project** written entirely in ClojureScript (no JavaScript mixing).

### Requirements

- Node.js and npm
- Java (for Clojure tooling)

### Installation

```bash
npm install
```

This installs:

- `shadow-cljs` - the ClojureScript compiler
- `react` and `react-dom` - React dependencies

### Development

```bash
npm start
```

This runs both the ClojureScript compiler and the dev server concurrently. Visit http://localhost:9100 to view your app.

**Note for Vite users:** Unlike JS/TS Vite projects where `npm run dev` starts the dev server, in ClojureScript:

- `npm run dev` - Compiles ClojureScript in watch mode (recompiles on file changes)
- `npm run preview` - Serves the compiled app on port 9100
- `npm start` - Runs both commands together for a seamless development experience

### Build for production

```bash
npm run build
```

This generates the production-optimized bundle in `resources/public/js/main.js`.

### Serve

```bash
npm run preview
```

This serves `resources/public/` via serve.

## Project structure

```
cljs/
├── src/
│   └── lab/
│       └── core.cljs          # Pure ClojureScript entry point
├── resources/public/
│   ├── index.html              # HTML template
│   └── css/
│       └── oblicum.css         # Stylesheet
├── shadow-cljs.edn             # Shadow CLJS config
├── deps.edn                    # ClojureScript dependencies
├── package.json                # npm dependencies
└── readme.md                   # This file
```

## Code

[src/lab/core.cljs](src/lab/core.cljs) - Pure ClojureScript code with:

- React import: `["react" :as React]`
- ReactDOM import: `["react-dom/client" :as ReactDOM]`
- DOM manipulation via ClojureScript interop (`.getElementById`, `.createRoot`, `.render`)
- Lisp-style syntax for JavaScript React API calls

## What is ClojureScript?

ClojureScript is a compiler that compiles Clojure code (Lisp-like) to JavaScript. Shadow CLJS is a modern build tool that:

- Compiles ClojureScript code to optimized JavaScript
- Can import NPM packages via ES6 module syntax (`require`, `import`)
- Generates source maps for debugging
- Supports hot reloading in dev mode
- Performs dead code elimination in production

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2014-2026 Rick Beerendonk
