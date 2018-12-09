/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM, styled */

const StyledH1 = styled.h1`
  text-align: center;
  color: blue;
`;

function Greeting() {
  return <StyledH1>Hello World!</StyledH1>;
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
