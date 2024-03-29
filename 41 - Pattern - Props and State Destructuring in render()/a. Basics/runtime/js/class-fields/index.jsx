/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: 'World' };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return (
      <React.Fragment>
        <input onChange={this.handleChange} value={name} />
        <h1>
          {greeting} {name}!
        </h1>
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor greeting="Hello" />);
