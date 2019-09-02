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
    // Therefore this won't work:
    this.setState({ count: this.state.count + 0.4 + this.props.value });

    this.props.onValueChange(1);

    this.setState({ count: this.state.count + 0.6 + this.props.value });
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
