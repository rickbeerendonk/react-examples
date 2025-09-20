/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/* eslint-disable react-compiler/react-compiler */

let firstRender = true;

export default function GreetingWithBug() {
  if (firstRender) {
    firstRender = false;
    // Thrown during hydration.
    // React can recover and will call onRecoverableError.
    throw new Error('Greeting crashed during hydration!');
  }

  return <h1>Hello World!</h1>;
}
