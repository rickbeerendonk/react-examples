# Render Root

## New DOM Element

Create a DOM element and use that as the root for the React application.

### Synchronous

#### JSX

```JSX
const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<h1>Hello World!</h1>, app);
```

### Asynchronous (unstable)

#### JSX

```JSX
const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.unstable_createRoot(app).render(<h1>Hello World!</h1>);
```