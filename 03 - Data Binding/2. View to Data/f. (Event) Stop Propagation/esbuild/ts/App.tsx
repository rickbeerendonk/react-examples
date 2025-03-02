/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { MouseEvent } from 'react';

function App() {
  function handleCapturing(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    console.group(target.id);
    console.log(
      `${event.currentTarget.id} (NativeEvent: ${(event.nativeEvent.currentTarget as HTMLElement).id}) received event for ${target.id} in capturing phase.`
    );
    //event.stopPropagation();
    //console.groupEnd();
  }

  function handleBubbling(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    console.log(
      `${event.currentTarget.id} (NativeEvent: ${(event.nativeEvent.currentTarget as HTMLElement).id}) received event for ${target.id} in bubbling phase.`
    );
    console.groupEnd();
  }

  function handleTarget(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    console.log(`${target.id} received event in atTarget phase.`);
    event.stopPropagation();
    console.groupEnd();
  }

  return (
    <div id="parent" onClickCapture={handleCapturing} onClick={handleBubbling}>
      Parent
      <div id="child" onClick={handleTarget}>
        Child
      </div>
    </div>
  );
}

export default App;
