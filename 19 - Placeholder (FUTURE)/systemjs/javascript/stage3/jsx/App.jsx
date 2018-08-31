/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import AsyncResult from './AsyncResult';

export default class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { isLoading: false };
  load = () => {
    // Perform an update with low priority
    ReactDOM.unstable_deferredUpdates(() => {
      this.setState({ isLoading: true });
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {// This is future functionality (using a special version of React):
        this.state.isLoading && (
          <React.Placeholder delayMs={1000} fallback={<div>Loading...</div>}>
            <div>
              <AsyncResult />
            </div>
          </React.Placeholder>
        )}
      </React.Fragment>
    );
  }
}
