# Render Root (React 18+)

## Existing DOM Element

Use an existing DOM element as the root for the React application.

### HTML

```HTML
<div id="root"></div>
```

### Concurrent Rendering

#### JSX

```JSX
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<h1>Hello World!</h1>);
```

## License

European Union Public Licence version 1.2

## Copyright

Copyright © 2014-2023 Rick Beerendonk
