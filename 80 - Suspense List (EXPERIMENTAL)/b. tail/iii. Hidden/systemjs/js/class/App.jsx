/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Scheduler from 'scheduler';

import Spinner from './Spinner';
import AsyncResult1 from './AsyncResult1';
import AsyncResult2 from './AsyncResult2';
import AsyncResult3 from './AsyncResult3';

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
          <ol>
            <React.unstable_SuspenseList revealOrder="forwards" tail="hidden">
              <li value="1">
                <React.Suspense fallback={<Spinner name="one" />}>
                  <AsyncResult1 name="one" time={1000} />
                </React.Suspense>
              </li>
              <li value="2">
                <React.Suspense fallback={<Spinner name="two" />}>
                  <AsyncResult2 name="two" time={3000} />
                </React.Suspense>
              </li>
              <li value="3">
                <React.Suspense fallback={<Spinner name="three" />}>
                  <AsyncResult3 name="three" time={2000} />
                </React.Suspense>
              </li>
            </React.unstable_SuspenseList>
          </ol>
        )}
      </React.Fragment>
    );
  }
}

export default App;
