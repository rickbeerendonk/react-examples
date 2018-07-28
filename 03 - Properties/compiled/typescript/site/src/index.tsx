/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

interface IGreetingProps {
  name: string;
}

class Greeting extends React.Component<IGreetingProps, undefined> {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

ReactDOM.render(<Greeting name="World" />, document.getElementById('app'));
