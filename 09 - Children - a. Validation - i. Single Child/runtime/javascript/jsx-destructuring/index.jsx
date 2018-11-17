/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

const List = ({ children }) => (
  <ul>
    {React.Children.map(children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);
List.propTypes = {
  children: PropTypes.element.isRequired
};

ReactDOM.render(
  <List>
    <span>Legal</span>
    <span>Illegal</span>
  </List>,
  document.getElementById('app')
);
