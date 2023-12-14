/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

class GreetingEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange} value={this.state.name} />
        {this.props.languages.includes('dk') && this.state.name && (
          <h1>DK: Hej {this.state.name}!</h1>
        )}
        {this.props.languages.includes('en') && this.state.name && (
          <h1>EN: Hello {this.state.name}!</h1>
        )}
        {this.props.languages.includes('nl') && this.state.name && (
          <h1>NL: Hallo {this.state.name}!</h1>
        )}
        {this.props.languages.includes('no') && this.state.name && (
          <h1>NO: Hallo {this.state.name}!</h1>
        )}
      </>
    );
  }
}

export default GreetingEditor;
