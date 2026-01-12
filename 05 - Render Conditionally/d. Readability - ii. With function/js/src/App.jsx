/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

export default function App() {
  const show = false;

  function renderComponent() {
    if (show) {
      return <Invisible />;
    }
    return <Visible />;
  }

  return (
    <>
      <h3>Conditional:</h3>
      {renderComponent()}
    </>
  );
}

function Invisible() {
  return <div>Invisible</div>;
}

function Visible() {
  return <div>Visible</div>;
}
