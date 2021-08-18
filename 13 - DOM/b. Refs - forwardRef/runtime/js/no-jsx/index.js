/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

const Greeting = React.forwardRef(function (props, ref) {
  return React.createElement(
    'div',
    { className: 'hello' },
    React.createElement('h1', { ref }, 'Hello ', props.name, '!')
  );
});
Greeting.displayName = 'Greeting';

function App() {
  const myGreeting = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <u>React</u>!!!';
  });

  return React.createElement(Greeting, {
    ref: myGreeting,
    name: 'World'
  });
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
