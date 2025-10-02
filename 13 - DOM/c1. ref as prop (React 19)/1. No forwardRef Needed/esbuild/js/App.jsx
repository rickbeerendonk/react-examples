/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useRef } from 'react';

// React 19: ref can be accessed as a regular prop
// No need for forwardRef anymore
function MyInput({ placeholder, ref }) {
  return <input placeholder={placeholder} ref={ref} />;
}

export default function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>Ref as Prop (React 19)</h2>
      <p>In React 19, ref can be passed as a regular prop without forwardRef</p>

      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
