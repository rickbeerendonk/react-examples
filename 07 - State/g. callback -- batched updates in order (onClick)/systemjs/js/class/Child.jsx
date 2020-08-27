/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

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
    this.setState(
      state => {
        console.log('getValue: Child - first');
        return { count: state.count + 0.6 };
      },
      () => console.log('Child - first')
    );

    if (this.props.onClick) {
      this.props.onClick();
    }

    this.setState(
      state => {
        console.log('getValue: Child - second');
        return { count: state.count + 0.4 };
      },
      () => console.log('Child - second')
    );
  }
  render() {
    // Render will be called once!
    console.log('render: Child');

    return (
      <button onClick={this.handleClick}>
        <div>{`Parent count: ${this.props.count}`}</div>
        <div>{`Child count: ${this.state.count}`}</div>
      </button>
    );
  }
}

export default Child;
