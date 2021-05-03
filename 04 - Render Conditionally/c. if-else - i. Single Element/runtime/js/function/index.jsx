/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const show = false;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {show ? <div>Invisible</div> : <div>Visible</div>}
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
