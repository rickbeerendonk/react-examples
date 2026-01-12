/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { JSX } from 'react/jsx-dev-runtime';

export default function App() {
  const show = false;

  let component: JSX.Element;
  if (show) {
    component = <Invisible />;
  } else {
    component = <Visible />;
  }

  return (
    <>
      <h3>Conditional:</h3>
      {component}
    </>
  );
}

function Invisible() {
  return <div>Invisible</div>;
}

function Visible() {
  return <div>Visible</div>;
}
