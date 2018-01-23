/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

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
List.propTypes = {
  children: PropTypes.element.isRequired
};

ReactDOM.render(
  React.createElement(List, null,
    React.createElement('span', null, 'Legal'),
    React.createElement('span', null, 'Illegal')
  ),
  document.getElementById('app')
);
