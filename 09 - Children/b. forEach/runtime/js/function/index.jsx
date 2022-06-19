/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return <i>Hello {props.name}</i>;
}

function List(props) {
  React.Children.forEach(props.children, (child, i) =>
    console.log(`Index ${i}: ${JSON.stringify(child)}`)
  );

  return <h1>List</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>
);
