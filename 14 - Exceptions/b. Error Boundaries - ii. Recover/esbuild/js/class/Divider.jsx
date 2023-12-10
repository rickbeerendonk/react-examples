/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

class Divider extends Component {
  constructor(props) {
    super(props);
    this.state = { numerator: 3, denominator: 2 };

    // Bind all non-react methods to this.
    this.handleNumeratorChange = this.handleNumeratorChange.bind(this);
    this.handleDenominatorChange = this.handleDenominatorChange.bind(this);
  }
  handleNumeratorChange(e) {
    this.setState({ numerator: Number(e.target.value) });
  }
  handleDenominatorChange(e) {
    this.setState({ denominator: Number(e.target.value) });
  }
  render() {
    const { numerator, denominator } = this.state;

    if (!denominator) {
      throw new Error('Division by zero.');
    }

    return (
      <div>
        <input
          onChange={this.handleNumeratorChange}
          type="number"
          value={numerator}
        />
        <span> divided by </span>
        <input
          autoFocus
          onChange={this.handleDenominatorChange}
          type="number"
          value={denominator}
        />
        <span> is equal to </span>
        {numerator / denominator}.
      </div>
    );
  }
}

export default Divider;
