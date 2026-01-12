/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';
import { StyledGreeting } from './StyledGreeting.jsx';

export default function App() {
  return (
    <>
      <Greeting name={'Standard'} />
      <StyledGreeting name={'Styled'} />
    </>
  );
}
