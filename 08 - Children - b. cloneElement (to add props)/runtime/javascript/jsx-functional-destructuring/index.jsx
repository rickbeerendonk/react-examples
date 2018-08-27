/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Greeting = ({ greeting, name }) => (
  <i>
    {greeting} {name}
  </i>
);

const List = ({ children, greeting }) => (
  <ul>
    {React.Children.map(children, (child, i) => (
      <li key={i}>
        {child.props.greeting
          ? child
          : // child is readonly.
            // To changes props/children on the child, use React.cloneElement.
            // New props (2nd argument) will overwrite existing props.
            React.cloneElement(child, { greeting: greeting })}
      </li>
    ))}
  </ul>
);

ReactDOM.render(
  <List greeting="Hello">
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" greeting="Good morning" />
  </List>,
  document.getElementById('app')
);
