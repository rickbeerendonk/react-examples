/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */
/* eslint no-console:"off" */

export default function () {
  console.warn('Component stack:');

  return (
    <>
      <h3>Child: The parent is not the owner.</h3>
      <p>The owner is responsible for properties and (re)renders.</p>
    </>
  );
}
