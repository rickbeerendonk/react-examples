/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// Component with render prop
class MouseOver extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { mouseIsOver: false };
  handleMouseEnter = () => {
    this.setState({ mouseIsOver: true });
  };
  handleMouseLeave = () => {
    this.setState({ mouseIsOver: false });
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/*
          Call the props.children function with what this component knows about the mouse:
        */}
        {this.props.children(this.state.mouseIsOver)}
      </div>
    );
  }
}

export default MouseOver;
