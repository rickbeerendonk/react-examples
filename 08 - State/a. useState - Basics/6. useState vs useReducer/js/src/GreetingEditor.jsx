/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { useState } from 'react';

// Component using multiple useState hooks for state management
// NOTE: Using useState directly is less declarative than useReducer because:
// 1. Logic is scattered across multiple event handlers instead of centralized in a reducer
// 2. Related state updates (value1, value2, and sum) are not grouped together
// 3. State transition logic is mixed with UI event handling (poor separation of concerns)
// 4. Harder to test state logic independently from components
function GreetingEditor() {
  // NOTE: State is fragmented across multiple useState calls
  // Instead of a single coherent state object, we manage separate pieces
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [subtract, setSubtract] = useState(false);

  // NOTE: ANTI-PATTERN - sum should be derived, not stored in state
  // Storing derived state causes:
  // 1. Synchronization bugs - sum can become out of sync with value1, value2, subtract
  // 2. Redundant state - violates DRY principle (single source of truth)
  // 3. More memory usage and complexity
  // 4. Requires updating sum in EVERY handler that affects it (fragile and error-prone)
  const [sum, setSum] = useState(3);

  function handleChange1(e) {
    const newValue1 = Number(e.target.value);
    // NOTE: Must manually update sum in EVERY handler - fragile and error-prone
    setValue1(newValue1);
    setSum(subtract ? newValue1 - value2 : newValue1 + value2);
  }

  function handleChange2(e) {
    const newValue2 = Number(e.target.value);
    // NOTE: Must manually update sum in EVERY handler - fragile and error-prone
    setValue2(newValue2);
    setSum(subtract ? value1 - newValue2 : value1 + newValue2);
  }

  function handleAddSubtract(e) {
    const newSubtract = !subtract;
    // NOTE: Must manually update sum in EVERY handler - fragile and error-prone
    setSubtract(newSubtract);
    setSum(newSubtract ? value1 - value2 : value1 + value2);
  }

  return (
    <>
      <input type="number" onChange={handleChange1} value={value1} />
      <input type="number" onChange={handleChange2} value={value2} />
      <input type="checkbox" onChange={handleAddSubtract} /> Subtract
      <h1>{sum}</h1>
    </>
  );
}

export default GreetingEditor;
