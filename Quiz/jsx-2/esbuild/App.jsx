/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */

function App() {
  return (
    <>
      <h1 style={{ color: 'red' }}>Hello World!</h1>
      <label for="myinput">Value: </label>
      <input id="myinput" className="foo" />
      <dummy this="123" xlink:href="456"></dummy>
    </>
  );
}

export default App;
