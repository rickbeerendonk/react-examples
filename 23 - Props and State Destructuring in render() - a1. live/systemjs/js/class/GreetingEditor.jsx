/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handleClick() {
    setTimeout(() => alert(this.state.name), 3000);
  }
  render() {
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={name} />
        <h1>
          {greeting} {name}!
        </h1>
        <button onClick={this.handleClick}>Show name</button>
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
