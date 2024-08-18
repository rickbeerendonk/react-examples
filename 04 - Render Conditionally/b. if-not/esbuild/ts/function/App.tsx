/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function App() {
  const hide = true;

  return (
    <>
      <h3>Conditional:</h3>
      {!hide || <div>Visible</div>}
    </>
  );
}

export default App;
