/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Three = props => <h1 style={{color: props.color}}>Three</h1>;

const Two = ({color}) => <Three color={color} />;

const One = ({color}) => <Two color={color} />;

ReactDOM.render(
  <One color="red" />,
  document.getElementById('app')
);
