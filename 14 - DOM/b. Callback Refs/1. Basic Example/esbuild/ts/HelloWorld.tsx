/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function HelloWorld() {
  function handleRef(ref) {
    ref.innerHTML = 'Hello <u>React</u>!!!';
  }

  return <h1 ref={handleRef}>Hello World!</h1>;
}

export default HelloWorld;
