/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: '' };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleKeyUp(e) {
    const key = e.key;
    this.setState(state => ({ pressed: state.pressed + key }));
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onKeyUp={this.handleKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
