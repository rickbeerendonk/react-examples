/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

const Three = (props, context) => <h1 style={{ color: context.color }}>Three</h1>;
Three.contextTypes = {
  color: PropTypes.string
}

const Two = () => <Three />;

class One extends React.Component {
  getChildContext() {
    return { color: this.props.color };
  }
  render() {
    return <Two />;
  }
}
One.childContextTypes = {
  color: PropTypes.string
};

ReactDOM.render(
  <One color="red" />,
  document.getElementById('app')
);
