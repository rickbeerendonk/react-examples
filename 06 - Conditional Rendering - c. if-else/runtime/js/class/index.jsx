/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.onChange} value={this.state.name} />
        {// Change render based on name:
        this.state.name ? (
          <h1>Hello {this.state.name}!</h1>
        ) : (
          <h1 style={{ color: 'red' }}>No name provided.</h1>
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
