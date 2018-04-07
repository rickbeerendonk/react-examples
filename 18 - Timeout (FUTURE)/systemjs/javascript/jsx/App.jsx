/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import AsyncResult from './AsyncResult';

export default class App extends React.Component {
  render() {
    return (
      // This is future functionality (using a special alpha version of React):
      <React.Timeout>
        {
          didTimeout =>
            didTimeout
              ? <div>Loading...</div>
              : <AsyncResult />
        }
      </React.Timeout>
    );
  }
}
