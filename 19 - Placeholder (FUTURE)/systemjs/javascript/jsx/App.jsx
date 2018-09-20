/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

//import { unstable_scheduleWork } from 'schedule';
const unstable_scheduleWork =
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler
    .unstable_scheduleWork;

import AsyncResult from './AsyncResult';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };

    // Bind all non-react methods to this.
    this.load = this.load.bind(this);
  }

  load() {
    // Perform an update with low priority
    unstable_scheduleWork(() => {
      this.setState({ isLoading: true });
    });
  }

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
