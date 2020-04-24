# Children

## toArray

```js
function List(props) {
  // toArray allows use of all Array methods.
  return (
    <ul>
      {React.Children.toArray(props.children)
        .reverse()
        .map((child, i) => (
          <li key={i}>{child}</li>
        ))}
    </ul>
  );
}
```

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2014-2020 Rick Beerendonk
