# Render Root

## Existing DOM Element

Use an existing DOM element as the root for the React application.

### HTML

```HTML
<div id="app"></div>
```

### Synchronous

#### JSX

```JSX
ReactDOM.render(<h1>Hello World!</h1> document.getElementById('app'));
```

### Asynchronous (unstable)

#### JSX

```JSX
ReactDOM.unstable_createRoot(document.getElementById('app')).render(
  <h1>Hello World!</h1>
);
```