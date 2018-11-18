/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = props => <i>Hello {props.name}</i>;

const List = props => (
  <ul>
    {React.Children.map(props.children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>,
  document.getElementById('app')
);
