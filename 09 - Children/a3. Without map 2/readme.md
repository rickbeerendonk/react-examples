# Children

## map

```js
function List(props) {
  return (
    <ul>
      {React.Children.map(props.children, (child, i) => (
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
