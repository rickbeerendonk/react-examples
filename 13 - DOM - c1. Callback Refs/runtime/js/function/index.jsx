/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function HelloWorld() {
  return (
    <h1 ref={ref => (ref.innerHTML = 'Hello <i>React</i>!!!')}>Hello World!</h1>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
