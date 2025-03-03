/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createRef } from 'react';

import GreetingWithExtras from './GreetingWithExtras.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.myGreeting = createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hi <u>React</u>!!!';
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
