/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Child from './Child';

export default class Parent extends React.Component {
  onRerenderClick = () => {
    // Force rerender
    this.forceUpdate();
  };
  onChildClick = () => {
    alert('Method handler');
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.onRerenderClick}>Rerender</button>
        </div>
        <ul>
          <li>
            <Child name="method" onClick={this.onChildClick} />
          </li>
          <li>
            <Child name="inline" onClick={() => alert('Inline handler')} />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
