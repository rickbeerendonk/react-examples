/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = props => (
  <h1 style={Object.assign({}, styles.header, props.style)}>Hello World!</h1>
);
/* React Native: <h1 style={[styles.header, props.style]}>Hello World!</h1> */

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' // margin-top in CSS
  }
};

ReactDOM.render(
  <Greeting style={{ background: 'orange', color: 'blue' }} />,
  document.getElementById('app')
);
