/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ComponentWithHooks from './ComponentWithHooks';
import useIsOnLine from './hooks/online';

class App extends ComponentWithHooks {
  state = {
    state1: 'state1'
  };
  myRef = React.createRef();
  componentDidMount() {
    this.myRef.current.innerHTML += 'Added by lifecycle method';
  }
  render() {
    const [stateHook1] = React.useState('stateHook1');
    const isOnLine = useIsOnLine();
    return (
      <ul>
        <li>
          <b>Prop:</b> {this.props.prop1}
        </li>
        <li>
          <b>State:</b> {this.state.state1}
        </li>
        <li>
          <b>State Hook:</b> {stateHook1}
        </li>
        <li>
          <b>Custom Hook, Online:</b> {String(isOnLine)}
        </li>
        <li ref={this.myRef}>
          <b>Ref: </b>
        </li>
      </ul>
    );
  }
}

export default App;
