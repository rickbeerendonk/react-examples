/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = React.createClass({
  displayName: 'Greeting',
  render: function () {
    return React.createElement('i', null, 'Hello ', this.props.name, '!');
  }
});

var List = React.createClass({
  displayName: 'List',
  render: function () {
    return (
      React.createElement('ul', null,
        this.props.children.map(function (child, i) {
          return React.createElement('li', { key: i }, child)
        })
      )
    );
  }
});

ReactDOM.render(
  React.createElement(List, null,
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, { name: 'Charlotte' })
  ),
  document.getElementById('app')
);