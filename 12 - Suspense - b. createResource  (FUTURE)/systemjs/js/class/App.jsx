/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import { unstable_scheduleCallback as scheduleCallback } from 'scheduler';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };

    // Bind all non-react methods to this.
    this.load = this.load.bind(this);
  }

  load() {
    // Perform an update with low priority
    scheduleCallback(() => {
      this.setState({ isLoading: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {this.state.isLoading && (
          <div>
            <React.Suspense maxDuration={1000} fallback={<Spinner />}>
              <AsyncResult id={123} />
            </React.Suspense>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
