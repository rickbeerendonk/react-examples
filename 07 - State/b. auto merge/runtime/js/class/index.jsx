/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World', other: 'More state' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
        <h2>{this.state.other}</h2>
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
