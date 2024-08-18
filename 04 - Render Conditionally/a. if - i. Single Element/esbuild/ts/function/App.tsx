/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function App() {
  const show = 1;

  return (
    <>
      <h3>Conditional:</h3>
      <ul>
        <li>{Boolean(show) && <div>Visible</div>}</li>
        <li>{show && <div>Visible</div>}</li>

        {/* If show is not a boolean, always convert to Boolean to prevent displaying a 0 */}
        <li>{show - 1 && <div>Invisible</div>}</li>
        <li>{Boolean(show - 1) && <div>Invisible</div>}</li>
      </ul>
    </>
  );
}

export default App;
