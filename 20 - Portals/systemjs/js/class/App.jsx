/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Portal from './Portal';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        This is the React App.
        <Portal />
      </React.Fragment>
    );
  }
}
