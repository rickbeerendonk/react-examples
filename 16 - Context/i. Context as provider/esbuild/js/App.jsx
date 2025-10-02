/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useContext } from 'react';
import ThemeContext from './ThemeContext.js';

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '10px 20px'
      }}
    >
      Current theme: {theme}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h2>Context as Provider (React 19)</h2>
      <p>
        In React 19, you can use &lt;Context&gt; instead of
        &lt;Context.Provider&gt;
      </p>

      {/* React 19: <Context> directly instead of <Context.Provider> */}
      <ThemeContext value="dark">
        <ThemedButton />
      </ThemeContext>

      <hr />

      <ThemeContext value="light">
        <ThemedButton />
      </ThemeContext>
    </div>
  );
}
