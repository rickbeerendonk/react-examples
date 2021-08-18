/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

const Greeting = React.forwardRef((props, ref) => (
  <div className="hello">
    <h1 ref={ref}>Hello {props.name}!</h1>
  </div>
));
Greeting.displayName = 'Greeting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <Greeting name="World" ref={this.myGreeting} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
