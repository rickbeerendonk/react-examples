/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting({ greet, name }) {
  return (
    <i>
      {greet} {name}
    </i>
  );
}

function List({ children, greet }) {
  return (
    <ul>
      {React.Children.map(children, (child, i) => (
        <li key={i}>
          {child.props.greet
            ? child
            : // child is readonly.
              // To changes props/children on the child, use React.cloneElement.
              // New props (2nd argument) will overwrite existing props.
              React.cloneElement(child, { greet })}
        </li>
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List greet="Hello">
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" greet="Good morning" />
  </List>
);
