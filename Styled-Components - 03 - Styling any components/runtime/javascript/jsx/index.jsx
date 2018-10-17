/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM, styled */
/* eslint react/prop-types: "off" */

const Greeting = ({ className, name }) => (
  <h1 className={className}>Hello {name}</h1>
);

const StyledGreeting = styled(Greeting)`
  color: blue;
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Greeting name={'Standard'} />
        <StyledGreeting name={'Styled'} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
