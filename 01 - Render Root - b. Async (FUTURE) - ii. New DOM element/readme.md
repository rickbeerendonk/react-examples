# Render Root

## New DOM Element

Create a DOM element and use that as the root for the React application.

### Asynchronous

#### JSX

```JSX
const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM
  .createRoot(app)
  .render(<h1>Hello World!</h1>);
```