/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off" */

class Three extends React.Component {
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}
Three.contextTypes = {
  color: PropTypes.string
};

class Two extends React.Component {
  render() {
    return <Three />;
  }
}

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

ReactDOM.render(<One color="red" />, document.getElementById('app'));
