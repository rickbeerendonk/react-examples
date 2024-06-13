/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function List(props) {
  return (
    <ul>
      {React.Children.map(props.children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}
List.propTypes = {
  children: PropTypes.element.isRequired
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <List>
    <span>Legal</span>
    <span>Illegal</span>
  </List>
);
