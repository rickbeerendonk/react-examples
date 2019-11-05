# Render Root

## New DOM Element

Create a DOM element and use that as the root for the React application.

### Blocking Mode

#### JSX

```JSX
const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM
  .createBlockingRoot(app)
  .render(<h1>Hello World!</h1>);
```

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2014 Rick Beerendonk
