/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import { logEvent } from 'utils';

function Hello(props) {
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    logEvent(
      `useEffect - props: ${JSON.stringify(props)} - state: {count: ${count}}`,
      'startup'
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state (useEffect) --', 'action');
      setCount(2);
    }

    return () => {
      logEvent('useEffect cleanup', 'cleanup');
    };
  });

  React.useLayoutEffect(() => {
    logEvent(
      `useLayoutEffect - props: ${JSON.stringify(
        props
      )} - state: {count: ${count}}`,
      'startup'
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state (useLayoutEffect) --', 'action');
      setCount(2);
    }

    return () => {
      logEvent('useLayoutEffect cleanup', 'cleanup');
    };
  });

  logEvent(
    `render() - props: ${JSON.stringify(props)} - state: {count: ${count}}`,
    'rendering'
  );

  return (
    <h1 style={{ display: 'none' }}>
      Hello {props.name}! ({count} time)
    </h1>
  );
}

export default Hello;
