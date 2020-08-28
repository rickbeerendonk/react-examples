/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Batched:
    this.setState(state => ({ count: state.count + 1 }));

    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    /* eslint no-console:"off" */
    // Render will be called once!
    console.log('Child rendered: ' + Date());
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>
          <div>{`Parent count: ${this.props.count}`}</div>
          <div>{`Child count: ${this.state.count}`}</div>
        </button>
        <p>
          Open console to see that a property and a state change in quick
          succession only lead to one rerender.
        </p>
      </React.Fragment>
    );
  }
}

export default Child;
