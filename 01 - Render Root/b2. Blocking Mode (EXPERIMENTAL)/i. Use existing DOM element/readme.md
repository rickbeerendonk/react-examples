# Render Root

## Existing DOM Element

Use an existing DOM element as the root for the React application.

### HTML

```HTML
<div id="app"></div>
```

### Blocking Mode

#### JSX

```JSX
ReactDOM
  .createBlockingRoot(document.getElementById('app'))
  .render(<h1>Hello World!</h1>);
```

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2014 Rick Beerendonk
