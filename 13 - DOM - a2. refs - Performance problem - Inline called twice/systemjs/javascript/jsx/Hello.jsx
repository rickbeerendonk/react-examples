/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    // Rerender every 2 seconds
    setTimeout(() => this.forceUpdate(), 2000);

    this.setSecondCallbackRef = this.setSecondCallbackRef.bind(this);
  }
  setSecondCallbackRef(ref) {
    console.log('callback ref 2nd: ' + new Date());
    this.myH2 = ref;
  }
  componentDidMount() {
    this.myH1.innerHTML = 'Hello <i>First</i>!!!';
    this.myH2.innerHTML = 'Hello <i>Second</i>!!!';
  }
  render() {
    return (
      <React.Fragment>
        <h1
          ref={ref => {
            console.log('callback ref 1st: ' + new Date());
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
      </React.Fragment>
    );
  }
}
