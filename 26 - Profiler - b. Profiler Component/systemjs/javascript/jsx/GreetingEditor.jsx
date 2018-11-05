/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  myProfilerRendered(id, phase, actualTime, baseTime, startTime, commitTime) {
    // source: https://github.com/reactjs/rfcs/pull/51
    console.group('Profiler');
    console.log('ID: ' + id);
    console.log('Phase (mount|update): ' + phase);
    console.log('Actual Time: ' + actualTime);
    console.log('Base Time: ' + baseTime);
    console.log('Start Time: ' + startTime);
    console.log('Commit Time: ' + commitTime);
    console.groupEnd();
  }
  onChange(name) {
    this.setState({ name });
  }
  render() {
    return (
      <React.Fragment>
        {/* Component(s) not measured... */}
        <EditBox onChange={this.onChange} value={this.state.name} />

        {/* Component(s) measured... */}
        <React.unstable_Profiler
          id="myProfiler"
          onRender={this.myProfilerRendered}
        >
          <Greeting name={this.state.name} />
        </React.unstable_Profiler>
      </React.Fragment>
    );
  }
}
