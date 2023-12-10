/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { Profiler, useState } from 'react';

import EditBox from './EditBox.jsx';
import Greeting from './Greeting.jsx';

function GreetingEditor() {
  const [name, setName] = useState('World');

  function myProfilerRendered(
    id,
    phase,
    actualTime,
    baseTime,
    startTime,
    commitTime,
    interactions
  ) {
    console.group('Profiler');
    console.log('ID: ', id);
    console.log('Phase (mount|update): ', phase);
    console.log('Actual Time: ', actualTime);
    console.log('Base Time: ', baseTime);
    console.log('Start Time: ', startTime);
    console.log('Commit Time: ', commitTime);
    console.log('Interactions (empty): ', JSON.stringify(interactions));
    console.groupEnd();
  }

  return (
    <>
      {/* Component(s) not measured... */}
      <EditBox onChange={setName} value={name} />

      {/* Component(s) measured... */}
      <Profiler id="myProfiler" onRender={myProfilerRendered}>
        <Greeting name={name} />
      </Profiler>
    </>
  );
}

export default GreetingEditor;
