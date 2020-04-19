# Children

## only

```js
function List(props) {
  // Only 1 child allowed (not 0, not 2 or more).
  return <h1>Only: {React.Children.only(props.children)}</h1>;
}
```

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2014-2020 Rick Beerendonk
