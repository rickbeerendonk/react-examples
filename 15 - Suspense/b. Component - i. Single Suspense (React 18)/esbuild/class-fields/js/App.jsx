/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, Suspense } from 'react';
import Scheduler from 'scheduler';

import Spinner from './Spinner.jsx';
import AsyncResult from './AsyncResult.jsx';

export default class App extends Component {
  state = { buttonClicked: false };
  load = () => {
    // Async
    Scheduler.unstable_scheduleCallback(1, () => {
      this.setState({ buttonClicked: true });
    });
  };

  render() {
    return (
      <>
        <button onClick={this.load}>Load</button>
        {this.state.buttonClicked && (
          <div>
            <Suspense fallback={<Spinner />}>
              <AsyncResult />
            </Suspense>
          </div>
        )}
      </>
    );
  }
}
