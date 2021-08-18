/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const show = true;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {show && <div>Visible</div>}
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
