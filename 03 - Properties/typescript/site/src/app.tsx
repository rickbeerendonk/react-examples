/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

interface IGreeting {
  name: string
}

class Greeting extends React.Component<IGreeting, {}> {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
      );
  }
}

ReactDOM.render(
  <Greeting name="World" />,
  document.getElementById('app')
);
