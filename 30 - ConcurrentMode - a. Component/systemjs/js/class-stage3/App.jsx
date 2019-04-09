/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { unstable_scheduleCallback as scheduleCallback } from 'scheduler';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';

class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { buttonClicked: false };
  load = () => {
    // Perform an update with low priority
    scheduleCallback(() => {
      this.setState({ buttonClicked: true });
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {this.state.buttonClicked && (
          <div>
            <React.Suspense maxDuration={1000} fallback={<Spinner />}>
              <AsyncResult />
            </React.Suspense>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;