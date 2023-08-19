# Render Root (React 17-)

## New DOM Element

Create a DOM element and use that as the root for the React application.

### Blocking Rendering

#### With JSX

```JSX
const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

ReactDOM.render(<h1>Hello World!</h1>, rootElem);
```

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2014 Rick Beerendonk
