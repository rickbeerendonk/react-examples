/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Spinner from './Spinner';

// import { unstable_Suspense as Suspense } from 'react';
const Suspense = React.unstable_Suspense;

// import scheduler from 'scheduler';
const scheduler =
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler;

import AsyncResult from './AsyncResult';

export default class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { isLoading: false };
  load = () => {
    // Perform an update with low priority
    scheduler.unstable_scheduleCallback(() => {
      this.setState({ isLoading: true });
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {// This is future functionality (using a special version of React):
        this.state.isLoading && (
          <div>
            <Suspense maxDuration={1000} fallback={<Spinner />}>
              <AsyncResult id={123} />
            </Suspense>
          </div>
        )}
      </React.Fragment>
    );
  }
}
