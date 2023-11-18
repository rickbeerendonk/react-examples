/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class GreetingEditor extends Component {
  state = { name: '<u onmouseover=alert("Hacked!")>Dangerous</u>' };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} size="50" />
        <h1>
          Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!
        </h1>
      </div>
    );
  }
}

export default GreetingEditor;
