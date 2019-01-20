/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

function Greeting(): JSX.Element {
  return (
    <>
      <h1>Hello World!</h1>
      What do you think about React?
      <div>It looks amazing.</div>
    </>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
