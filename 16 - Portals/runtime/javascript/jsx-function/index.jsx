/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const App = () => (
  <React.Fragment>
    This is the React App.
    <Invisible />
  </React.Fragment>
);

const Invisible = () =>
  ReactDOM.createPortal(<Visible />, document.getElementById('portal'));

const Visible = () => (
  <h3>
    I am a visible portal, shown outside the react root by an invisible
    component!
  </h3>
);

ReactDOM.render(<App />, document.getElementById('app'));
