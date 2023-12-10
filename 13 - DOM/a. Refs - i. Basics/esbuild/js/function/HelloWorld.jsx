/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function HelloWorld() {
  const myH1 = React.useRef();

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myH1.current.innerHTML = 'Hello <u>React</u>!!!';
  }, []);

  return <h1 ref={myH1}>Hello World!</h1>;
}

export default HelloWorld;
