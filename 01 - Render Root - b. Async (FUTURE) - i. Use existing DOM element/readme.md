# Render Root

## Existing DOM Element

Use an existing DOM element as the root for the React application.

### HTML

```HTML
<div id="app"></div>
```

### Asynchronous

#### JSX

```JSX
ReactDOM
  .createRoot(document.getElementById('app'))
  .render(<h1>Hello World!</h1>);
```