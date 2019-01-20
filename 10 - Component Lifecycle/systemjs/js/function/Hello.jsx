/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import { logEvent } from 'utils';

function Hello(props) {
  const [count, setCount] = React.useState(1);
  const h1Ref = React.useRef(null);

  React.useEffect(() => {
    logEvent(
      `useEffect - props: ${JSON.stringify(
        props
      )} - state: {count: ${count}} - rendered: ${h1Ref.current.outerHTML}`,
      'startup'
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state (useEffect) --', 'action');
      setCount(2);
    }

    return () => {
      logEvent(
        `useEffect cleanup - rendered: ${h1Ref.current.outerHTML}`,
        'cleanup'
      );
    };
  });

  React.useLayoutEffect(() => {
    logEvent(
      `useLayoutEffect - props: ${JSON.stringify(
        props
      )} - state: {count: ${count}} - rendered: ${h1Ref.current.outerHTML}`,
      'startup'
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state (useLayoutEffect) --', 'action');
      setCount(2);
    }

    return () => {
      logEvent(
        `useLayoutEffect cleanup - rendered: ${h1Ref.current.outerHTML}`,
        'cleanup'
      );
    };
  });

  logEvent(
    `render() - props: ${JSON.stringify(props)} - state: {count: ${count}}`,
    'rendering'
  );

  return (
    <h1 ref={h1Ref}>
      Hello {props.name}! ({count} time)
    </h1>
  );
}

export default Hello;
