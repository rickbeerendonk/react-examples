/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [0, 1, 2],
      lastId: 2
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    let newLastId = this.state.lastId + 1;
    this.setState(prevState => ({
      items: [...prevState.items, newLastId],
      lastId: newLastId
    }));
  }

  handleRemove(key) {
    let items = this.state.items;
    let keyIndex = items.indexOf(+key);
    if (keyIndex !== -1) {
      items.splice(keyIndex, 1);
      this.setState({ items });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <hr />
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.state.items.map(key => {
            return (
              <div
                onClick={this.handleRemove.bind(null, key)}
                key={key}
                className='item'>
                {key}
              </div>
            );
          })}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default App;
