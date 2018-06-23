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
    The only item:
    <div style={contentStyle}>
      {props.children}
    </div>
  </div>
);

ReactDOM.render(
  <Container>
    <em>First</em>
  </Container>,
  document.getElementById('app')
);
