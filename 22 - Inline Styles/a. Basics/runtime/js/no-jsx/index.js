/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', { style: styles.header }, 'Hello World!');
  }
}

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' //margin-top in CSS
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Greeting));
