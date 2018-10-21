# What to expect in React 17 (or 16.6?)

With the [React Conference (25-26 October 2018)](https://conf.reactjs.org/) approaching quickly, there are a lot of changes in the React repo to suspect we are getting near React 17. In this article I'll try to sum up some of the changes we can expect.

## Root

Creating the root will change. Instead of having one function doing two things, ReactDOM will have a createRoot method. The root that returns has a render() method.

..... why ????? .....

```js
ReactDOM.createRoot(app).render(<h1>Hello React {React.version}!</h1>);
```

At the time of writing, createRoot() has a "unstable_" prefix, so the name might change.

## Function Components

Functional Components will be called Function Components from now on.

## MemoComponent

PureComponent will be renamed as MemoComponent.

## memo() Higher-Order Component

There was no solution for using Function Components as pure, eh... memo components. You could rewrite it as a Class Component extending React.PureComponent, but that involved some work. There will be a new Higher-Order Component (HOC) called memo() for use with Function Components:

```jsx
const Greeting = ({ name }) => <h1>Hello { name }!</h1>;

const memoGreeting = memo(Greeting);
```

The memo HOC can also serve the same purpose as shouldComponentUpdate() lifecycle method does for Class Components. memo() accepts a compare function as the second parameter:

```jsx
const Greeting = ({ name }) => <h1>Hello { name }!</h1>;

const memoGreeting = memo(Greeting, (oldProps, newProps) => oldProps.name === newProps.name );
```

### Not limited to Function Components

The memo HOC is not limited to wrap Function Components, but can be used on any type of component.


...chaining memo HOC (greet, name)?...


## Suspense


........

## React Cache

There is a npm package called react-cache for some years now, but the React team now has ownership of the name. See the collaborators on the npmjs.com website: https://www.npmjs.com/package/react-cache. At the time of writing though, the page is still refering to the old (non-Facebook) package.

........


## Scheduler

There is a npm package called scheduler for many years, but the React team now has ownership of the name. See the collaborators on the npmjs.com website: https://www.npmjs.com/package/scheduler. At the time of writing though, the page is still refering to the old (non-Facebook) package.

The scheduler allows you to schedule changes (think setState() calls) with different levels of priority:

* scheduleCallback()
* now()
* runWithPriority()

```js
scheduler.scheduleCallback(() => {
  this.setState({ isLoading: true });
});
```

And it will contain some helper functions

* cancelCallback()
* getCurrentPriorityLevel()
* wrapCallback()

At the time of writing, all function names have a "unstable_" prefix, so the names might change.


