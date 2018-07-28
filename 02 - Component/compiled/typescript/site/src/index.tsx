/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

class Greeting extends React.Component<undefined, undefined> {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
