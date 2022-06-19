/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", no-console:"off" */

class Child extends React.Component {
  render() {
    return <h2>Child: {this.props.obj.name}</h2>;
  }
}

class ChildPure extends React.PureComponent {
  render() {
    return <h2>Child (Pure): {this.props.obj.name}</h2>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.obj = {};
    this.state = { name: '' };
    this.nameChanged = this.nameChanged.bind(this);
  }
  nameChanged({ target: { value: name } }) {
    this.obj.name = name;
    this.setState({ name });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <div style={{ color: 'darkgray' }}>
          Observe that the child is not updated if it is a PureComponent.
        </div>
        <div>
          <input
            autoFocus
            onChange={this.nameChanged}
            value={this.state.name}
          />
        </div>
        <Child obj={this.obj} />
        <ChildPure obj={this.obj} />
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
