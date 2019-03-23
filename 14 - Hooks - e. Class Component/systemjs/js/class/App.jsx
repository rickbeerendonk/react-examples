/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ComponentWithHooks from './ComponentWithHooks3';
import useIsOnLine from './hooks/online';

class App extends ComponentWithHooks {
  state = {
    onLineText: 'OnLine'
  };
  h1Ref = React.createRef();
  componentDidMount() {
    this.h1Ref.current.innerHTML += ' (added by componentDidMount())';
  }
  render() {
    // Should be ignored
    return 'test';
  }
  renderWithHooks() {
    const [offLineText] = React.useState('OffLine');
    const isOnLine = useIsOnLine();
    return (
      <h1 ref={this.h1Ref}>
        {this.props.browserName} is{' '}
        {isOnLine ? this.state.onLineText : offLineText}!
      </h1>
    );
  }
}

export default App;
