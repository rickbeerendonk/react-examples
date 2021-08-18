/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: 'World' };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input autoFocus onChange={this.handleChange} value={this.state.name} />
        <h1>
          Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<GreetingEditor />, document.getElementById('root'));
