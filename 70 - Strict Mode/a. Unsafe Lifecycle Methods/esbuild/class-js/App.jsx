/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

import { Component, StrictMode } from 'react';

import Hello from './Hello.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'One' };
  }
  componentDidMount() {
    this.setState({ name: 'Two' });
  }
  render() {
    return (
      <StrictMode>
        <Hello name={this.state.name} />
      </StrictMode>
    );
  }
}

export default App;
