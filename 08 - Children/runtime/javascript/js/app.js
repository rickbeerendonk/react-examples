/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Greeting extends React.Component {
  render() {
    return React.createElement('i', null, 'Hello ', this.props.name, '!');
  }
}

class List extends React.Component {
  render() {
    return (
      React.createElement('ul', null,
        React.Children.map(
          this.props.children,
          function (child, i) {
            return React.createElement('li', { key: i }, child)
          }
        )
      )
    );
  }
}

ReactDOM.render(
  React.createElement(List, null,
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, { name: 'Charlotte' })
  ),
  document.getElementById('app')
);