/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = () => [
  <h1 key="heading">Hello World!</h1>,
  'What do you think about React?',
  <div key="enthusiasm">It looks amazing.</div>
];

ReactDOM.render(<Greeting />, document.getElementById('app'));
