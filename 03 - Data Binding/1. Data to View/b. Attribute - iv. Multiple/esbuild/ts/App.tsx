/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

export default function App() {
  const attr = {
    min: 18,
    max: 65,
    type: 'number',
    defaultValue: 25
  };
  return <input {...attr}></input>;
}
