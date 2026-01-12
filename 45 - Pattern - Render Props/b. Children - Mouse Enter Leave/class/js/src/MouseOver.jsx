/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

// Component with render prop
class MouseOver extends Component {
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
