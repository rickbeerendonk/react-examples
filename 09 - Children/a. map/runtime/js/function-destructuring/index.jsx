/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting({ name }) {
  return <i>Hello {name}</i>;
}

function List({ children }) {
  return (
    <ul>
      {React.Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>
);
