/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Component with render prop
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsOver: false };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter() {
    this.setState({ mouseIsOver: true });
  }
  handleMouseLeave() {
    this.setState({ mouseIsOver: false });
  }
  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/*
          Call the props.render function with what this component knows about the mouse
          (this.state can be removed if state contains more than 1 property):
        */}
        {this.props.render(this.state.mouseIsOver)}
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <h1 style={this.props.highlight ? { color: 'red' } : null}>
        Hello {this.props.name}!
      </h1>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MouseOver
          render={mouseIsOver => (
            <Greeting name="First" highlight={mouseIsOver} />
          )}
        />
        <Greeting name="Second" />
        <MouseOver
          render={mouseIsOver => (
            <h2>
              Subtitle
              {mouseIsOver && ' (with mouse)'}
            </h2>
          )}
        />
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
