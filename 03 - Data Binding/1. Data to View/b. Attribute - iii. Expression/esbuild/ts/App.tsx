/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default function App() {
  return (
    <input type="date" value={new Date().toISOString().substring(0, 10)} />
  );
}
