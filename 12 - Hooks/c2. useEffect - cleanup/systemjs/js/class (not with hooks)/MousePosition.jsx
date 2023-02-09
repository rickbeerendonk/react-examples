/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

class MousePosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: undefined,
      y: undefined
    };
  }

  handleMouseMove = e => {
    this.setState({ x: e.pageX, y: e.pageY });
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    console.log('Cleanup MousePosition');
  }

  render() {
    return (
      <h1>
        Mouse is at ({this.state.x}, {this.state.y})
      </h1>
    );
  }
}

export default MousePosition;
