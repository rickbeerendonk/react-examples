/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM, styled */

const StyledH1 = styled.h1`
  text-align: center;
  color: blue;
`;

function Greeting() {
  return <StyledH1>Hello World!</StyledH1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
