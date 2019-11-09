/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Component with render prop
class MouseOver extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { mouseIsOver: false };
  handleMouseEnter = () => {
    this.setState({ mouseIsOver: true });
  };
  handleMouseLeave = () => {
    this.setState({ mouseIsOver: false });
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/*
          Call the props.children function with what this component knows about the mouse:
        */}
        {this.props.children(this.state.mouseIsOver)}
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
        <MouseOver>
          {mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
        </MouseOver>
        <Greeting name="Second" />
        <MouseOver>
          {mouseIsOver => (
            <h2>
              Subtitle
              {mouseIsOver && ' (with mouse)'}
            </h2>
          )}
        </MouseOver>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
