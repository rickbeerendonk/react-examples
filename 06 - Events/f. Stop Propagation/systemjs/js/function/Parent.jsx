/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

import Child from './Child';

function Parent() {
  function handleCapturing(event) {
    console.log(
      `${event.currentTarget.id} (NativeEvent: ${event.nativeEvent.currentTarget.id}) received event for ${event.target.id} in capturing phase.`
    );
    //event.stopPropagation();
  }

  function handleBubbling(event) {
    console.log(
      `${event.currentTarget.id} (NativeEvent: ${event.nativeEvent.currentTarget.id}) received event for ${event.target.id} in bubbling phase.`
    );
  }

  return (
    <div id="parent" onClickCapture={handleCapturing} onClick={handleBubbling}>
      Parent
      <Child />
    </div>
  );
}

export default Parent;
