/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React, { lazy, Suspense, useState } from 'react';
import DynamicComponent from './DynamicComponent.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [Comp, setComp] = useState(null);

  function handleInputChange(e) {
    const value = e.target.value.trim();
    setInputValue(value);

    // Create a new lazy component; if the module doesn't exist, the error boundary will hide it
    setComp(() => lazy(() => import(`./components/${value}.jsx`)));
  }

  return (
    <>
      <input
        placeholder="Component"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Renders nothing if a child throws during render (e.g., failed lazy import) */}
      <ErrorBoundary resetKey={inputValue}>
        <Suspense fallback={<div>Loading...</div>}>
          {Comp ? (
            <DynamicComponent as={Comp}>Hello World!</DynamicComponent>
          ) : null}
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
