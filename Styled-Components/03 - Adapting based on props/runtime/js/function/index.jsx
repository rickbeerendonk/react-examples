/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM, styled */

const StyledButton = styled.button`
  color: ${props => (props.disabled ? 'red' : 'green')};
  margin: 1em;
`;

function App() {
  return (
    <React.Fragment>
      <StyledButton>Enabled</StyledButton>
      <StyledButton disabled={true}>Disabled</StyledButton>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
