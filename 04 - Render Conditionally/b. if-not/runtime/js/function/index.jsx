/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const hide = true;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {!hide || <div>Visible</div>}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
