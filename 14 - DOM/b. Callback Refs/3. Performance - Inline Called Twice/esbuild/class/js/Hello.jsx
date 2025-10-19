/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);

    // Rerender every 2 seconds
    setInterval(() => this.forceUpdate(), 2000);

    this.setSecondCallbackRef = this.setSecondCallbackRef.bind(this);
  }
  setSecondCallbackRef(ref) {
    console.log('callback ref 2nd: ' + new Date(), ref);
    this.myH2 = ref;
  }
  componentDidMount() {
    this.myH1.innerHTML = 'Hello <i>First</i>!!!';
    this.myH2.innerHTML = 'Hello <i>Second</i>!!!';
  }
  render() {
    return (
      <>
        <h1
          ref={ref => {
            console.log('callback ref 1st: ' + new Date(), ref);
            this.myH1 = ref;
          }}
        >
          Hello 1st!
        </h1>
        <h2 ref={this.setSecondCallbackRef}>Hello 2nd!</h2>
        <p>
          Callback ref: If it is a inline method, it is being called twice
          during updates. See the console to see the effect.
        </p>
        <p>
          Inline methods are recreated during render, so first call is to set
          the ref to null, second call is to set the new value.
        </p>
      </>
    );
  }
}

export default Hello;
