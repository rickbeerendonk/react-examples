/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${props => (props.disabled ? props.theme.disabled : props.theme.main)};
  border-color: ${props => props.theme.main};
  margin: 1em;
`;
StyledButton.defaultProps = {
  theme: {
    main: 'black',
    disabled: 'gray'
  }
};

export default {
  StyledButton
};
