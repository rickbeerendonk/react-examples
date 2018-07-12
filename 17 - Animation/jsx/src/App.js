/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
        <TransitionGroup>
          {this.state.items.map(key => {
            return (
              <CSSTransition
                key={key}
                classNames="example"
                timeout={{ enter: 500, exit: 500 }}
              >
                <div
                  onClick={this.handleRemove.bind(null, key)}
                  className='item'>
                  {key}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
