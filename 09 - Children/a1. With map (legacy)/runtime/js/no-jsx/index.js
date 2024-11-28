/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

const Greeting = props =>
  React.createElement('i', null, 'Hello ', props.name, '!');

const List = props =>
  React.createElement(
    'ul',
    null,
    React.Children.map(props.children, function (child, i) {
      return React.createElement('li', { key: i }, child);
    })
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(
    List,
    null,
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting, { name: 'Benjamin' }),
    React.createElement(Greeting, { name: 'Charlotte' })
  ),
  document.getElementById('root')
);
