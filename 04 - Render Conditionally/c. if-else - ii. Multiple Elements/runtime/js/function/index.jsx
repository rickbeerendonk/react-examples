/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const show = false;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {show ? (
        <React.Fragment>
          <div>Invisible</div>
          <div>Also Invisible</div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>Visible</div>
          <div>Also Visible</div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
