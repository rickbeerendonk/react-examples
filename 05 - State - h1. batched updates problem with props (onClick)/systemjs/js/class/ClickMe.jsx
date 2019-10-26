/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Updates are batched for performance reasons.
    // Therefore in useState, use the props parameter (and not this.props).

    // Set property
    this.props.setValue(0.4);

    this.setState(state => {
      // Use property to set state
      return { count: state.count + 0.6 + this.props.value };
    });
  }
  render() {
    return (
      <a onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </a>
    );
  }
}

export default ClickMe;
