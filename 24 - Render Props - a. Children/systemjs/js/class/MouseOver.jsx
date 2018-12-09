/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// Component with render prop
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsOver: false };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseEnter() {
    this.setState({ mouseIsOver: true });
  }
  onMouseLeave() {
    this.setState({ mouseIsOver: false });
  }
  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {/*
          Call the props.children function with what this component knows about the mouse:
        */}
        {this.props.children(this.state.mouseIsOver)}
      </div>
    );
  }
}

export default MouseOver;
