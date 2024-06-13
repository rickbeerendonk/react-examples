/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

class List extends React.Component {
  render() {
    return (
      <ul>
        {React.Children.map(this.props.children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    );
  }
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
