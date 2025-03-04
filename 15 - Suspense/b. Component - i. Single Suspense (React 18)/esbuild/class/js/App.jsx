/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, Suspense } from 'react';
import Scheduler from 'scheduler';

import Spinner from './Spinner.jsx';
import AsyncResult from './AsyncResult.jsx';

class App extends Component {
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
