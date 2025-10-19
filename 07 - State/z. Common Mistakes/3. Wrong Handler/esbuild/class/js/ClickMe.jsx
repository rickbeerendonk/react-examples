/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

class ClickMe extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      // setState is not called when the event takes place.
      // The result of setState() is called when the event takes place.
      <button
        onClick={/* () => */ this.setState({ count: this.state.count + 1 })}
      >
        This button has been clicked {this.state.count} times
      </button>
    );
  }
}

export default ClickMe;
