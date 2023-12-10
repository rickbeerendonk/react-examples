/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function App() {
  const show = false;

  return (
    <>
      <h3>Conditional:</h3>
      {(function () {
        if (show) {
          return <div>Invisible</div>;
        } else {
          return <div>Visible</div>;
        }
      })()}
    </>
  );
}

export default App;
