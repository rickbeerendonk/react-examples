/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

/* eslint-disable no-undef */

export default function App() {
  const show = false;

  return (
    <>
      <h3>Conditional:</h3>
      {do {
        if (show) {
          <div>Invisible</div>;
        } else {
          <div>Visible</div>;
        }
      }}
    </>
  );
}
