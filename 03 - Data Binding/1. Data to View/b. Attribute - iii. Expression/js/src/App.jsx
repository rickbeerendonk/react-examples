/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default function App() {
  const today = new Date();

  return <input type="date" value={today.toISOString().substring(0, 10)} />;
}
