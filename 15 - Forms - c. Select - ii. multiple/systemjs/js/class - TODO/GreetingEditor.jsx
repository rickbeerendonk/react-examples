/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: ['train'] };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const val = e.target.value;
    if (typeof val === Array) {
      this.setState({ selected: val });
    } else {
      this.setState({ selected: [val] });
    }
  }
  render() {
    return (
      <select multiple onChange={this.handleChange} value={this.state.selected}>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
        <option value="train">Train</option>
      </select>
    );
  }
}

export default GreetingEditor;
