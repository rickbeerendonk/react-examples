/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

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
