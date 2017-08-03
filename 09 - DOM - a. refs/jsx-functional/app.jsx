/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

let HelloWorld = () => 
  <h1 ref={(ref) => ref.innerHTML = 'Hello <i>React</i>!!!'}>Hello World!</h1>

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);