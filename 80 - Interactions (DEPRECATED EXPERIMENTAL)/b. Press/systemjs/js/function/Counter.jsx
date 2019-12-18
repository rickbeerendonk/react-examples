/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Press from 'react-interactions/press';

/* eslint no-console:"off" */
console.log(Press);

// Workaround for not being able to do "import { ... } from..."
const useState = React.useState;
const usePress = Press.usePress;

function Counter() {
  const [count, setCount] = useState(0);
  const [isPressed, setPressed] = useState(false);

  const pressListener = usePress({
    onPress: () => setCount(c => c + 1),
    onPressChange: setPressed
  });

  return (
    <h1
      listeners={pressListener}
      style={{ textDecoration: isPressed ? 'underline' : undefined }}
    >
      I am clicked {count} times.
    </h1>
  );
}

export default Counter;
