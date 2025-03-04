/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import useIsOnLine from './hooks/online.js';

export default function App() {
  const isOnLine = useIsOnLine();
  return <h1>Browser is {isOnLine ? 'OnLine' : 'OffLine'}!</h1>;
}
