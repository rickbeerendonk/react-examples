/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function CheckBox(props) {
  const [checked, setChecked] = React.useState(props.checked);

  function handleClick() {
    props.onChange && props.onChange(!checked);
    setChecked(c => !c);
  }

  return (
    <span
      role="checkbox"
      aria-checked={checked}
      tabIndex="0"
      onMouseUp={handleClick}
      onKeyUp={handleClick}
    >
      {checked ? 'Yes' : 'No'}
    </span>
  );
}

export default CheckBox;
