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
      <>
        <button onClick={this.load}>Load</button>
        {this.state.buttonClicked && (
          <ol>
            <React.unstable_SuspenseList revealOrder="backwards">
              <li value="1">
                <React.Suspense fallback={<Spinner name="one" />}>
                  <AsyncResult name="one" time={2000} />
                </React.Suspense>
              </li>
              <li value="2">
                <React.Suspense fallback={<Spinner name="two" />}>
                  <AsyncResult name="two" time={3000} />
                </React.Suspense>
              </li>
              <li value="3">
                <React.Suspense fallback={<Spinner name="three" />}>
                  <AsyncResult name="three" time={1000} />
                </React.Suspense>
              </li>
            </React.unstable_SuspenseList>
          </ol>
        )}
      </>
    );
  }
}

export default App;
