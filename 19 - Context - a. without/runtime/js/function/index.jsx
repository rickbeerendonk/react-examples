/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */

function Three(props) {
  return <h1 style={{ color: props.color }}>Three</h1>;
}

function Two({ color }) {
  return <Three color={color} />;
}

function One({ color }) {
  return <Two color={color} />;
}

ReactDOM.render(<One color="red" />, document.getElementById('app'));
