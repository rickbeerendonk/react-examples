/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return [
      React.createElement('h1', null, 'Hello World!'),
      'What do you think about React?',
      React.createElement('div', null, 'It looks amazing.')
    ];
  }
}

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);