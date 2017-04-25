/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

var List = React.createClass({
  displayName: 'List',
  propTypes: {
    children: PropTypes.element.isRequired
  },
  render: function () {
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
});

ReactDOM.render(
  React.createElement(List, null,
    React.createElement('span', null, 'Legal'),
    React.createElement('span', null, 'Illegal')
  ),
  document.getElementById('app')
);