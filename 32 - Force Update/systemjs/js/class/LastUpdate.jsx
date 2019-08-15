/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class LastUpdate extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 2000);
  }
  render() {
    return <h1>Last update: {new Date().toString() /* Side effect, don't do this in render() */}</h1>;
  }
}

export default LastUpdate;
