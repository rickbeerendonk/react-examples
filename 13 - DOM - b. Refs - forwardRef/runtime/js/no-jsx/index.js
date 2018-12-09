/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = React.forwardRef(function(props, ref) {
  return React.createElement(
    'div',
    { className: 'hello' },
    React.createElement('h1', { ref }, 'Hello ', props.name, '!')
  );
});

function App() {
  const myGreeting = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  });

  return React.createElement(Greeting, {
    ref: myGreeting,
    name: 'World'
  });
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
