/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const [pressed, setPressed] = React.useState('');

  function handleKeyUp(e) {
    e.persist();
    setPressed(pressed => pressed + e.key);
  }

  return (
    <React.Fragment>
      <input autoFocus onKeyUp={handleKeyUp} />
      <div>Pressed: {pressed}</div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
