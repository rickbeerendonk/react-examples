/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: ['bike', 'train'] };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      selected: [...e.target.selectedOptions].map(o => o.value)
    });
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
