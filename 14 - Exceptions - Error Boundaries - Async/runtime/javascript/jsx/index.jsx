/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint no-console:"off" */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const value = e.target.value;
    this.setState(() => ({ name: value }));
  }
  async shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === 'Error') {
      throw new Error('Error');
    }

    return true;
  }
  render() {
    if (this.state.name === 'renderException') {
      throw new Error('render exception');
    }

    return [
      <input key="input" onChange={this.onChange} value={this.state.name} />,
      <h1 key="output">Hello {this.state.name}!</h1>
    ];
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    // Called during "render" phase: No side-effects are allowed.
    // Use to render a fallback UI (setState -> render()).
    // See: https://github.com/reactjs/reactjs.org/pull/1223/files

    return { error };
  }

  componentDidCatch(error, info) {
    // Called during "commit" phase: Side-effects are allowed.
    // Use for side-effects like logging.
    // See: https://github.com/reactjs/reactjs.org/pull/1223/files

    console.log(
      `componentDidCatch() was called with error "${
        error.message
      }" and with info ${JSON.stringify(info)}`
    );
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ color: 'red' }}>
          <h1>{this.state.error.message}</h1>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <GreetingEditor />
  </ErrorBoundary>,
  document.getElementById('app')
);
