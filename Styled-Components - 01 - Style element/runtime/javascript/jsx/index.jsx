/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM, styled */

const StyledH1 = styled.default.h1`
  text-align: center;
  color: blue;
`;

class Greeting extends React.Component {
  render() {
    return <StyledH1>Hello World!</StyledH1>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
