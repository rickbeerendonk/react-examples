/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Bottom from './Bottom.jsx';

import module from './Middle.module.css';

export default function Middle() {
  return (
    <>
      <h1 className={module.title}>Middle</h1>
      <Bottom />
    </>
  );
}
