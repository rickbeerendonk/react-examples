/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Greeting extends React.Component {
  render() {
    return React.createElement(
      'i',
      null,
      this.props.greeting,
      ' ',
      this.props.name,
      '!'
    );
  }
}

class List extends React.Component {
  render() {
    const self = this;

    return React.createElement(
      'ul',
      null,
      React.Children.map(self.props.children, function(child, i) {
        return React.createElement(
          'li',
          { key: i },
          child.props.greeting
            ? child
            : // child is readonly.
              // To changes props/children on the child, use React.cloneElement.
              // New props (2nd argument) will overwrite existing props.
              React.cloneElement(child, { greeting: self.props.greeting })
        );
      })
    );
  }
}

ReactDOM.render(
  React.createElement(
    List,
    { greeting: 'Hello' },
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, {
      name: 'Charlotte',
      greeting: 'Good Morning'
    })
  ),
  document.getElementById('app')
);
