/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default function App() {
  const today = new Date();

  return (
    <h1>{'Today = '.toUpperCase() + today.toISOString().substring(0, 10)}!</h1>
  );
}
