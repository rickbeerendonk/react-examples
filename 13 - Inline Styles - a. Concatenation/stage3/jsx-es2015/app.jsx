/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Greeting extends React.Component {
  render() {
    return (
      // See: https://github.com/tc39/proposal-object-rest-spread
      <h1 style={{...styles.header, ...this.props.style}}>Hello World!</h1>
      /* React Native: <h1 style={[styles.header, this.props.style]}>Hello World!</h1> */
    );
  }
};

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic',  // font-style in CSS
    marginTop: '75px',  // margin-top in CSS
  }
};

ReactDOM.render(
  <Greeting style={{ background: 'orange', color: 'blue' }} />,
  document.getElementById('app')
);
