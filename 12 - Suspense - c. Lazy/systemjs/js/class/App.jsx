/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

//import Greeting from './Greeting';
const Greeting = React.lazy(() => import('./Greeting'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    this.setState(state => ({ visible: !state.visible }));
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleButtonClick}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Greeting />
          </React.Suspense>
        )}
      </React.Fragment>
    );
  }
}

export default App;
