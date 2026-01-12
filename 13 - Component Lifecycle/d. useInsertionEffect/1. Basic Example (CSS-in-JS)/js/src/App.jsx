/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useInsertionEffect, useState } from 'react';

// Simulating a CSS-in-JS library that injects styles
function useCSS(rule) {
  useInsertionEffect(() => {
    // Insert CSS before any DOM mutations
    const style = document.createElement('style');
    style.textContent = rule;
    document.head.appendChild(style);

    console.log('CSS injected via useInsertionEffect');

    return () => {
      document.head.removeChild(style);
    };
  }, [rule]);
}

function StyledComponent({ color }) {
  // This hook injects CSS dynamically
  useCSS(`.dynamic-text { color: ${color}; font-weight: bold; }`);

  return <div className="dynamic-text">This text is styled dynamically!</div>;
}

export default function App() {
  const [color, setColor] = useState('red');

  return (
    <div>
      <h2>useInsertionEffect Example</h2>
      <p>Used by CSS-in-JS libraries to inject styles before DOM updates</p>

      <StyledComponent color={color} />

      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('red')}>Red</button>

      <p>
        Check console and inspect <code>&lt;head&gt;</code> element
      </p>
    </div>
  );
}
