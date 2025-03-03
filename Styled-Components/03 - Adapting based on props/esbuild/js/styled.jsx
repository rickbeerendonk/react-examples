/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${props => (props.disabled ? 'red' : 'green')};
  margin: 1em;
`;

export default {
  StyledButton
};
