/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

function App() {
  const appTitle = `App ${new Date().getFullYear()}`;
  return (
    <>
      <title>{appTitle}</title>
      <p>Observe that the title is {appTitle}</p>
    </>
  );
}

export default App;