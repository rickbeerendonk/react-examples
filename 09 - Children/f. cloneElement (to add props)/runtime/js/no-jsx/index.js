/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return React.createElement(
      'i',
      null,
      this.props.greet,
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
      React.Children.map(self.props.children, function (child, i) {
        return React.createElement(
          'li',
          { key: i },
          child.props.greet
            ? child
            : // child is readonly.
              // To changes props/children on the child, use React.cloneElement.
              // New props (2nd argument) will overwrite existing props.
              React.cloneElement(child, { greet: self.props.greet })
        );
      })
    );
  }
}

ReactDOM.render(
  React.createElement(
    List,
    { greet: 'Hello' },
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, {
      name: 'Charlotte',
      greet: 'Good Morning'
    })
  ),
  document.getElementById('root')
);
