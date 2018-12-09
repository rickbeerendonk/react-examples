/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

// Component with render prop
function MouseOver({ children }) {
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
        Call the props.children function with what this component knows about the mouse:
      */}
      {children(mouseIsOver)}
    </div>
  );
}

function Greeting({ name, highlight }) {
  return <h1 style={highlight ? { color: 'red' } : null}>Hello {name}!</h1>;
}

function App() {
  return (
    <React.Fragment>
      <MouseOver>
        {mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
      </MouseOver>
      <Greeting name="Second" />
      <MouseOver>
        {mouseIsOver => (
          <h2>
            Subtitle
            {mouseIsOver && ' (with mouse)'}
          </h2>
        )}
      </MouseOver>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
