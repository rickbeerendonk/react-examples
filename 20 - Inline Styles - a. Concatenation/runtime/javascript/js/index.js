/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Greeting extends React.Component {
  render() {
    return React.createElement(
      'h1',
      { style: Object.assign({}, styles.header, this.props.style) },
      'Hello World!'
    );
    /* React Native: return React.createElement('h1', {style: [styles.header, this.props.style]}, 'Hello World!'); */
  }
}

var styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' //margin-top in CSS
  }
};

ReactDOM.render(
  React.createElement(Greeting, {
    style: { background: 'orange', color: 'blue' }
  }),
  document.getElementById('app')
);
