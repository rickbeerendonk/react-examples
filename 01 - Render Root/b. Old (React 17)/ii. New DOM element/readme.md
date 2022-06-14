# Render Root

## New DOM Element

Create a DOM element and use that as the root for the React application.

### JavaScript

#### With JSX (React 17-)

```JSX
const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<h1>Hello World!</h1>, app);
```

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2014 Rick Beerendonk
