/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useDebugValue, useState } from 'react';

function useOnlineStatus(): [boolean, () => void] {
  const [isOnline, setIsOnline] = useState(true);

  // Show the label in React DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  // Simulate online/offline toggle
  const toggle = () => setIsOnline(prev => !prev);

  return [isOnline, toggle];
}

export default function App() {
  const [isOnline, toggleOnline] = useOnlineStatus();

  return (
    <div>
      <h1>Status: {isOnline ? 'Online' : 'Offline'}</h1>
      <button onClick={toggleOnline}>Toggle Status</button>
      <p>Open React DevTools to see the debug value</p>
    </div>
  );
}
