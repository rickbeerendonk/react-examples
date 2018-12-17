/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// Component with render prop
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsOver: false };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter() {
    this.setState({ mouseIsOver: true });
  }
  handleMouseLeave() {
    this.setState({ mouseIsOver: false });
  }
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
