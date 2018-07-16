/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import AsyncResult from './AsyncResult';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };

    // Bind all non-react methods to this.
    this.load = this.load.bind(this);
  }

  load() {
    // Perform an update with low priority
    ReactDOM.unstable_deferredUpdates(() => {
      this.setState({ loading: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {// This is future functionality (using a special alpha version of React):
        this.state.loading && (
          <React.Timeout ms={1000}>
            {didTimeout => (
              <div>{didTimeout ? 'Loading...' : <AsyncResult />}</div>
            )}
          </React.Timeout>
        )}
      </React.Fragment>
    );
  }
}
