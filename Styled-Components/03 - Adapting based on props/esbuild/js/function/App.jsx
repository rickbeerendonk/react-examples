/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { StyledButton } from './styled.jsx';

function App() {
  return (
    <>
      <StyledButton>Enabled</StyledButton>
      <StyledButton disabled={true}>Disabled</StyledButton>
    </>
  );
}

export default App;
