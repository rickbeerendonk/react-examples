/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM, styled */

const StyledButton = styled.default.button`
  color: ${props => (props.disabled ? 'red' : 'green')};
`;

class Greeting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledButton>Enabled</StyledButton>
        <StyledButton disabled={true}>Disabled</StyledButton>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
