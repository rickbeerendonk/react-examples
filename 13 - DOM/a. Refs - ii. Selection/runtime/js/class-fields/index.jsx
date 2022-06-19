/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: 'World' };
  inputRef = React.createRef();
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  componentDidMount() {
    this.inputRef.current.select();
  }
  render() {
    return (
      <React.Fragment>
        <input
          onChange={this.handleChange}
          ref={this.inputRef}
          value={this.state.name}
        />
        {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
