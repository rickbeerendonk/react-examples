# What to expect in React 16.6 (or 17?)

With the [React Conference (25-26 October 2018)](https://conf.reactjs.org/) approaching quickly, there are a lot of changes in the React repo to suspect we are getting near React 16.6 and maybe even 17. During my React training sessions around Europe I try to prepare my students as good as possible and cover these changes already. In this article I'll try to sum up some of the expected changes for you.

## Root

Creating the root will change. Instead of having one function doing two things, ReactDOM will have a createRoot method. The root that returns has a render() method.

..... why ????? .....

```js
ReactDOM.createRoot(app).render(<h1>Hello React {React.version}!</h1>);
```

At the time of writing, createRoot() has a "unstable\_" prefix, so the name might change.

## Function Components

Functional Components will be called Function Components from now on.

## MemoComponent

PureComponent will be renamed as MemoComponent. The MemoComponent is implementing the [memoization optimization technique](https://en.wikipedia.org/wiki/Memoization).

## memo()

There was no solution for using Function Components as pure, eh... memo components. You could rewrite it as a Class Component extending React.MemoComponent, but that involved some work. There will be a new function called memo() (looks like a Higher Order Component, but isn't) for use with Function Components:

```jsx
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;

const memoGreeting = memo(Greeting);
```

The memo HOC can also serve the same purpose as shouldComponentUpdate() lifecycle method does for Class Components. memo() accepts a compare function as the second parameter:

```jsx
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;

const memoGreeting = memo(
  Greeting,
  (oldProps, newProps) => oldProps.name === newProps.name
);
```

### Not limited to Function Components

The memo function is not limited to wrap Function Components, but can be used on any type of component.

## Suspense

........

## React Cache

There is a npm package called react-cache for some years now, but the React team now has ownership of the name. See the collaborators on the npmjs.com website: https://www.npmjs.com/package/react-cache. At the time of writing though, the page is still refering to the old (non-Facebook) package.

........

## Scheduler

There is a npm package called scheduler for many years, but the React team now has ownership of the name. See the collaborators on the npmjs.com website: https://www.npmjs.com/package/scheduler. At the time of writing though, the page is still refering to the old (non-Facebook) package.

The scheduler allows you to schedule changes (think setState() calls) with different levels of priority:

- scheduleCallback()
- now()
- runWithPriority()

```js
scheduler.scheduleCallback(1, () => {
  this.setState({ isLoading: true });
});
```

And it will contain some helper functions

- cancelCallback()
- getCurrentPriorityLevel()
- wrapCallback()

At the time of writing, all function names have a "unstable\_" prefix, so the names might change.

## Error Boundaries

...(split)...

## Deprecated Factory Components

Factory Components will be removed due to lack of use.

```js
const FactoryComponent = () => {
  return {
    render: function() {
      return <div>foo</div>;
    }
  };
};
```
