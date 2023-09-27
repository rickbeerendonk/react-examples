/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function App() {
  const show = false;

  return (
    <>
      <h3>Conditional:</h3>
      {show ? <div>Invisible</div> : <div>Visible</div>}
    </>
  );
}

export default App;
