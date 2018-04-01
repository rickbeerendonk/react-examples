/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

class List extends React.Component {
  render() {
    return (
      <ul>{
        React.Children.map(this.props.children, (child, i) => <li key={i}>{child}</li>)
      }</ul>
    );
  }
}
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
