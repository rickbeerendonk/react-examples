/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import { logEvent } from 'utils';

function Hello(props) {
  const [count, setCount] = React.useState(1);
  const h1Ref = React.useRef();

  React.useLayoutEffect(() => {
    const currentH1 = h1Ref.current;
    logEvent(
      `useLayoutEffect - props: ${JSON.stringify(
        props
      )} - state: {count: ${count}} - rendered: ${h1Ref.current.outerHTML}`,
      'startup'
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state (useLayoutEffect) --', 'action');
      setCount(22222);
    }

    return () => {
      logEvent(
        `useLayoutEffect cleanup - rendered: ${currentH1.outerHTML}`,
        'cleanup'
      );
    };
  }, [props, count]);

  React.useEffect(() => {
    const currentH1 = h1Ref.current;
    logEvent(
      `useEffect - props: ${JSON.stringify(
        props
      )} - state: {count: ${count}} - rendered: ${currentH1.outerHTML}`,
      'startup'
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state (useEffect) --', 'action');
      setCount(2);
    }

    return () => {
      logEvent(
        `useEffect cleanup - rendered: ${currentH1.outerHTML}`,
        'cleanup'
      );
    };
  }, [props, count]);

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
