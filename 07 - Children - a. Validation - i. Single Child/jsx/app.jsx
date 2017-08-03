/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

var List = createReactClass({
  propTypes: {
    children: PropTypes.element.isRequired
  },
  render: function () {
    return (
      <ul>{
        React.Children.map(
          this.props.children, 
          function (child, i) {
            return <li key={i}>{child}</li>
          }
        )
      }</ul>
    );
  }
});

ReactDOM.render(
  <List>
    <span>Legal</span>
    <span>Illegal</span>
  </List>,
  document.getElementById('app')
);