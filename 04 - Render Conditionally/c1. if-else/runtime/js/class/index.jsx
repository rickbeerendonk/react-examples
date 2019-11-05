/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Greeting:</h3>
        {// Change render based on name:
        this.props.name ? (
          <div>Hello {this.props.name}!</div>
        ) : (
          <div style={{ color: 'red' }}>No name provided.</div>
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.Fragment>
    <Greeting name="Alexandra" />
    <Greeting />
    <Greeting name="Benjamin" />
  </React.Fragment>,
  document.getElementById('app')
);
