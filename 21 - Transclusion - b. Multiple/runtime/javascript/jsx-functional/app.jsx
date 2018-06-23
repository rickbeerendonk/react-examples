/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
};

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
};

const Container = props => (
  <div style={containerStyle}>
    The 1st item:
    <div style={contentStyle}>
      {props.slot1}
    </div>
    The 2nd item:
    <div style={contentStyle}>
      {props.slot2}
    </div>
  </div>
);

ReactDOM.render(
  <Container
    slot1={
      <em>First</em>
    }
    slot2={
      <b>Second</b>
    }
  />,
  document.getElementById('app')
);
