/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return React.createElement(
      'a',
      { onClick: /* () => */ this.setState({ count: this.state.count + 1 }) },
      'This link has been clicked ',
      this.state.count,
      ' times'
    );
  }
}

export default ClickMe;
