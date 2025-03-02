/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

function App() {
  function handleCapturing(event) {
    console.group(event.target.id);
    console.log(
      `${event.currentTarget.id} (NativeEvent: ${event.nativeEvent.currentTarget.id}) received event for ${event.target.id} in capturing phase.`
    );
  }

  function handleBubbling(event) {
    console.log(
      `${event.currentTarget.id} (NativeEvent: ${event.nativeEvent.currentTarget.id}) received event for ${event.target.id} in bubbling phase.`
    );
    console.groupEnd();
  }

  function handleTarget(event) {
    console.log(`${event.target.id} received event in atTarget phase.`);
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
