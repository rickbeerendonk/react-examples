/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

export default function App() {
  // JSX requires self-closing tags for elements without children
  return (
    <>
      {/* Correct */}
      <img src="logo.png" alt="Logo" />
      <br />
      <input type="text" placeholder="Enter text here" />

      <hr />

      {/* Correct */}
      <img src="logo.png" alt="Logo"></img>
      <br></br>
      <input type="text" placeholder="Enter text here"></input>

      <hr />

      {/* Wrong */}
      {/*
      <img src="logo.png" alt="Logo">
      <br>
      <input type="text" placeholder="Enter text here">
      */}
    </>
  );
}
