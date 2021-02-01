/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

/* eslint-disable jsx-a11y/no-onchange */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'train' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ selected: e.target.value });
  }
  render() {
    return (
      <select onChange={this.handleChange} value={this.state.selected}>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
        <option value="train">Train</option>
      </select>
    );
  }
}

export default App;
