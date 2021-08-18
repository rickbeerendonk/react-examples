/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Component with render prop
function MouseOver({ render }) {
  const [mouseIsOver, setMouseIsOver] = React.useState(false);

  function handleMouseEnter() {
    setMouseIsOver(true);
  }

  function handleMouseLeave() {
    setMouseIsOver(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/*
        Call the props.render function with what this component knows about the mouse:
      */}
      {render(mouseIsOver)}
    </div>
  );
}

function Greeting({ name, highlight }) {
  return <h1 style={highlight ? { color: 'red' } : null}>Hello {name}!</h1>;
}

function App() {
  return (
    <React.Fragment>
      <MouseOver
        render={mouseIsOver => (
          <Greeting name="First" highlight={mouseIsOver} />
        )}
      />
      <Greeting name="Second" />
      <MouseOver
        render={mouseIsOver => (
          <h2>
            Subtitle
            {mouseIsOver && ' (with mouse)'}
          </h2>
        )}
      />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
