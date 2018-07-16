/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        This is the React App.
        <Invisible />
      </React.Fragment>
    );
  }
}

class Invisible extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Visible />,
      document.getElementById('portal')
    );
  }
}

class Visible extends React.Component {
  render() {
    return (
      <h3>
        I am a visible portal, shown outside the react root by an invisible
        component!
      </h3>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
