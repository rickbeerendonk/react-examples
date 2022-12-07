/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import './Greeting.css';

function Greeting() {
  return (
    <>
      <h1 className="greeting">Hello World!</h1>

      {/* Accessibility issue (ESLint) */}
      <img src="Oblicum-logo-400.png" />
    </>
  );
}

export default Greeting;
