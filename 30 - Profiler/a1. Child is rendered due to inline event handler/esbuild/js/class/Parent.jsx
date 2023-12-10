/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import Child from './Child.jsx';

class Parent extends Component {
  handleRerenderClick = () => {
    // Force rerender
    this.forceUpdate();
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.handleRerenderClick}>Rerender</button>
        </div>
        <Child onClick={() => alert('Inline handler')} />
      </>
    );
  }
}

export default Parent;
