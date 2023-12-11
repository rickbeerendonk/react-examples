/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import {
  Component,
  Suspense,
  unstable_SuspenseList as SuspenseList
} from 'react';
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
          <ol>
            <SuspenseList revealOrder="forwards" tail="collapsed">
              <li value="1">
                <Suspense fallback={<Spinner name="one" />}>
                  <AsyncResult name="one" time={2000} />
                </Suspense>
              </li>
              <li value="2">
                <Suspense fallback={<Spinner name="two" />}>
                  <AsyncResult name="two" time={3000} />
                </Suspense>
              </li>
              <li value="3">
                <Suspense fallback={<Spinner name="three" />}>
                  <AsyncResult name="three" time={1000} />
                </Suspense>
              </li>
            </SuspenseList>
          </ol>
        )}
      </>
    );
  }
}

export default App;
