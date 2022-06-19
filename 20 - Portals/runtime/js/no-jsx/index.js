/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      'This is the React App.',
      React.createElement(Portal)
    );
  }
}

class Portal extends React.Component {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
