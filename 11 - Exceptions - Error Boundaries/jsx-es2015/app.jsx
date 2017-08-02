/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

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

    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
      </div>
    );
  }
}

class ErrorBoundary extends React.Component {
  state = {error: null, info: null};
  componentDidCatch(error, info) {
    this.setState({error});
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{color: 'red'}}>
          <h1>{this.state.error.message}</h1>
          <p>{this.state.error.stack}</p>
          <h1>Info</h1>
          <p>{this.state.info}</p>
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