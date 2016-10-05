/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const List = props => (
  <ul>{
    props.children.map(function (child, i) {
      return <li key={i}>{child}</li>
    })
  }</ul>
);
List.propTypes = {
  children: React.PropTypes.element.isRequired
};

ReactDOM.render(
  <List>
    <span>Legal</span>
    <span>Illegal</span>
  </List>,
  document.getElementById('app')
);