/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import Child from './Child.jsx';

class Parent extends Component {
  handleRerenderClick = () => {
    // Force rerender
    this.forceUpdate();
  };
  handleChildClick = () => {
    alert('Method handler');
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.handleRerenderClick}>Rerender</button>
        </div>
        <ul>
          <li>
            <Child name="method" onClick={this.handleChildClick} />
          </li>
          <li>
            <Child name="inline" onClick={() => alert('Inline handler')} />
          </li>
        </ul>
      </>
    );
  }
}

export default Parent;
