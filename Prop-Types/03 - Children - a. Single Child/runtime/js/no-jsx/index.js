/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function List(props) {
  return React.createElement(
    'ul',
    null,
    React.Children.map(props.children, function (child, i) {
      return React.createElement('li', { key: i }, child);
    })
  );
}
List.propTypes = {
  children: PropTypes.element.isRequired
};

ReactDOM.render(
  React.createElement(
    List,
    null,
    React.createElement('span', null, 'Legal'),
    React.createElement('span', null, 'Illegal')
  ),
  document.getElementById('root')
);
