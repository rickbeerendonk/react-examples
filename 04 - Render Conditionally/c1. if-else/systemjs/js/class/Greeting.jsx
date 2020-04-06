/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Greeting:</h3>
        {
          // Change render based on name:
          this.props.name ? (
            <div>Hello {this.props.name}!</div>
          ) : (
            <div style={{ color: 'red' }}>No name provided.</div>
          )
        }
      </React.Fragment>
    );
  }
}

export default Greeting;
