/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

function App() {
  const [pressed, setPressed] = React.useState('');

  function handleKeyUp(e) {
    setPressed(pressed => pressed + e.key);
  }

  return (
    <React.Fragment>
      <input onKeyUp={handleKeyUp} />
      <div>Pressed: {pressed}</div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
