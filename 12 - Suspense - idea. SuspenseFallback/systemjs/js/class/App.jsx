/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { unstable_scheduleCallback as scheduleCallback } from 'scheduler';

import Spinner from './Spinner';
import AsyncResult from './AsyncResult';
import SuspenseFallback from './SuspenseFallback';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonClicked: false };

    // Bind all non-react methods to this.
    this.load = this.load.bind(this);
  }

  load() {
    // Async
    scheduleCallback(() => {
      this.setState({ buttonClicked: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.load}>Load</button>
        {this.state.buttonClicked && (
          <div>
            {/* SuspenseFallback prevents spinner flashing */}
            <SuspenseFallback
              maxDuration={1000}
              fallback={<Spinner />}
              fallbackDuration={1000}
            >
              <AsyncResult duration={1200} />
            </SuspenseFallback>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
