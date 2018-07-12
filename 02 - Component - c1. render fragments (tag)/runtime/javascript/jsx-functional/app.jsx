/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = () => <React.Fragment>
  <h1>Hello World!</h1>
  What do you think about React?
  <div>It looks amazing.</div>
</React.Fragment>;

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);