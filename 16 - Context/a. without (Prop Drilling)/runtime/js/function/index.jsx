/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Bottom(props) {
  return <h1 style={{ color: props.color }}>Bottom</h1>;
}

function Middle({ color }) {
  return <Bottom color={color} />;
}

function Top({ color }) {
  return <Middle color={color} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Top color="red" />);
