/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

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
  shouldComponentUpdate(nextProps, nextState) {
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
    this.state = {error: null, info: null};
  }
  componentDidCatch(error, info) {
    this.setState({error, info});
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{color: 'red'}}>
          <h1>{this.state.error.message}</h1>
          <pre>{this.state.error.stack}</pre>
          <h1>Info</h1>
          <pre>Component stack:
{this.state.info.componentStack}</pre>
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
