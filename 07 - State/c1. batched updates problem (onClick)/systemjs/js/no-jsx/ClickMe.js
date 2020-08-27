/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

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
    this.setState({ count: this.state.count + 0.4 });
    this.setState({ count: this.state.count + 0.6 });
  }
  render() {
    return React.createElement(
      'button',
      { onClick: this.handleClick },
      'This button has been clicked ',
      this.state.count,
      ' times'
    );
  }
}

export default ClickMe;
