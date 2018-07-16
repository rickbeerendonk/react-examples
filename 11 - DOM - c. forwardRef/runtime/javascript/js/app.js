/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = React.forwardRef((props, ref) =>
  React.createElement(
    'div',
    { className: 'hello' },
    React.createElement('h1', { ref }, 'Hello ', props.name, '!')
  )
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement(Greeting, {
      ref: this.myGreeting,
      name: 'World'
    });
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
