/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

class App extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      'This is the React App.',
      React.createElement(Invisible)
    );
  }
}

class Invisible extends React.Component {
  render() {
    return ReactDOM.createPortal(
      React.createElement(Visible),
      document.getElementById('portal')
    );
  }
}

class Visible extends React.Component {
  render() {
    return React.createElement(
      'h3',
      null,
      'I am a visible portal, shown outside the react root by an invisible component!'
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
