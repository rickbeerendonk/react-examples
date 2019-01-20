/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM, styled */

const StyledH1 = styled.h1`
  text-align: center;
  color: blue;
`;

class Greeting extends React.Component {
  render() {
    return <StyledH1>Hello World!</StyledH1>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
