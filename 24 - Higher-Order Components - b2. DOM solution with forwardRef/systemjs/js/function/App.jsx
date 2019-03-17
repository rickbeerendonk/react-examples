/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import GreetingWithExtras from './GreetingWithExtras';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hi <i>React</i>!!!';
  }
  render() {
    return (
      <GreetingWithExtras
        name="World <- Should be replaced"
        ref={this.myGreeting}
      />
    );
  }
}

export default App;
