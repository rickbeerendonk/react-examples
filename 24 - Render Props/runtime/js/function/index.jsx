/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

// Component with render prop
function MouseOver({ render }) {
  const [mouseIsOver, setMouseIsOver] = React.useState(false);

  function onMouseEnter() {
    setMouseIsOver(true);
  }

  function onMouseLeave() {
    setMouseIsOver(false);
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/*
        Call the props.render function with what this component knows about the mouse
        (this.state can be removed if state contains more than 1 property):
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

ReactDOM.render(<App />, document.getElementById('app'));
