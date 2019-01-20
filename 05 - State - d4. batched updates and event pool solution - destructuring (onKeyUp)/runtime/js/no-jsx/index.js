/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: '' };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleKeyUp({ key }) {
    this.setState(state => ({ pressed: state.pressed + key }));
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        autoFocus: true,
        onKeyUp: this.handleKeyUp
      }),
      React.createElement('div', null, 'Pressed: ', this.state.pressed)
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
