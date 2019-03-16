/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import * as Scheduler from 'scheduler';

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
    /*
      // packages/scheduler/src/Scheduler.js

      unstable_ImmediatePriority: 1
      unstable_UserBlockingPriority: 2
      unstable_NormalPriority: 3
      unstable_LowPriority: 4
      unstable_IdlePriority: 5

      // Internal:
      // var NORMAL_PRIORITY_TIMEOUT = 5000;
      // var LOW_PRIORITY_TIMEOUT = 10000;

      function unstable_getCurrentPriorityLevel(),

      function unstable_scheduleCallback(callback, deprecated_options),
      function unstable_getFirstCallbackNode(),
      function unstable_cancelCallback(callbackNode),

      functino unstable_now() [ = function getCurrentTime(): number ],
      function unstable_shouldYield(),

      function unstable_pauseExecution(),
      function unstable_continueExecution(),
      
      function unstable_runWithPriority(priorityLevel, eventHandler),
      function unstable_next(eventHandler),
    */

    // console.log(Scheduler.unstable_now());
    // console.log(Scheduler.unstable_getCurrentPriorityLevel());
    // console.log(React);
    // debugger;

    // Perform an update with low priority
    Scheduler.unstable_scheduleCallback(() => {
      this.setState({ isLoading: true });
    });
    // Scheduler.unstable_runWithPriority(Scheduler.unstable_LowPriority, () => {
    //   this.setState({ isLoading: true });
    // });
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
