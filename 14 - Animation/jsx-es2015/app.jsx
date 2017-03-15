/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
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
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
