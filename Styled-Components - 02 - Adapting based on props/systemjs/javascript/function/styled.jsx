/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${props => (props.disabled ? 'red' : 'green')};
  margin: 1em;
`;

export default {
  StyledButton
};
