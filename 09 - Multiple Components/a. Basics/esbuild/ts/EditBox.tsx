/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2024 Rick Beerendonk     !*/

import type { ChangeEvent } from 'react';

interface EditBoxProps {
  onChange: (value: string) => void;
  value: string;
}

function EditBox({ onChange, value }: EditBoxProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return <input onChange={handleChange} value={value} />;
}

export default EditBox;
