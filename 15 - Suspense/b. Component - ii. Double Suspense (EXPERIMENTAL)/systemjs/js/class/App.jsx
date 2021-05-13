/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Scheduler from 'scheduler';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonClicked: false };

    // Bind all non-react methods to this.
    this.load = this.load.bind(this);
  }

  load() {
    // Async
    Scheduler.unstable_scheduleCallback(1, () => {
      this.setState({ buttonClicked: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {this.state.buttonClicked && (
          <div>
            <React.Suspense fallback={<Spinner name="Outer" />}>
              <h3>First</h3>
              <React.Suspense fallback={<Spinner name="Inner" />}>
                <h3>Second</h3>
                <AsyncResult />
              </React.Suspense>
            </React.Suspense>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
