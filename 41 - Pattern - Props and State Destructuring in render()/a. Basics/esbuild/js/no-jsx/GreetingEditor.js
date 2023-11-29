/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement, Fragment } from 'react';

class GreetingEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return createElement(
      Fragment,
      null,
      createElement('input', {
        autoFocus: true,
        onChange: this.handleChange,
        value: name
      }),
      createElement('h1', null, greeting, ' ', name, '!')
    );
  }
}

export default GreetingEditor;
