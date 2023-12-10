/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, lazy, Suspense } from 'react';

//import Greeting from './Greeting.jsx';
const Greeting = lazy(() => import('./Greeting.jsx'));

class App extends Component {
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
      <>
        <button onClick={this.handleButtonClick}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && (
          <Suspense fallback={<div>Loading...</div>}>
            <Greeting />
          </Suspense>
        )}
      </>
    );
  }
}

export default App;
