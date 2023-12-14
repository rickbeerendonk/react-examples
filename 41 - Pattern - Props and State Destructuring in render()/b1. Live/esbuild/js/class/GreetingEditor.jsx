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
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return (
      <>
        <input onChange={this.handleChange} value={name} />
        <h1>
          {greeting} {name}!
        </h1>
        <button onClick={() => setTimeout(() => alert(this.state.name), 3000)}>
          Show name
        </button>
      </>
    );
  }
}

export default GreetingEditor;
