# Children

## forEach

```js
function List(props) {
  React.Children.forEach(props.children, (child, i) =>
    console.log(`Index ${i}: ${JSON.stringify(child)}`)
  );

  return <h1>List</h1>;
}
```

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2014-2020 Rick Beerendonk
