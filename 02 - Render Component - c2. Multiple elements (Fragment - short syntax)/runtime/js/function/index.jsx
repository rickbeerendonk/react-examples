/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return (
    <>
      <h1>Hello World!</h1>
      What do you think about React?
      <div>It looks amazing.</div>
    </>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
