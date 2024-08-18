/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

const App = () => {
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

  function handleTarget(event) {
    console.log(`${event.target.id} received event in atTarget phase.`);
    event.stopPropagation();
  }

  return (
    <div id="parent" onClickCapture={handleCapturing} onClick={handleBubbling}>
      Parent
      <div id="child" onClick={handleTarget}>
        Child
      </div>
    </div>
  );
};

export default App;
