/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

/* Inline function */

interface IEditBoxProps {
  onChange: (value: string) => void;
  value: string;
}

const EditBox: React.FC<IEditBoxProps> = ({ onChange, value }) => (
  <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
);

/* Arrow */

/*
const EditBox: React.FC<IEditBoxProps> = ({ onChange, value }) {
  const handleChange = e => onChange(e.target.value);
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}
*/

export default EditBox;
