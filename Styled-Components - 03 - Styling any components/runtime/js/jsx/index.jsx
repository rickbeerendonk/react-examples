/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM, styled */
/* eslint react/prop-types: "off" */

function Greeting({ className, name }) {
  return <h1 className={className}>Hello {name}</h1>;
}

const StyledGreeting = styled(Greeting)`
  color: blue;
`;

function App() {
  return (
    <React.Fragment>
      <Greeting name={'Standard'} />
      <StyledGreeting name={'Styled'} />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
