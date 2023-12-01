/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

interface EditBoxProps {
  onChange: (value: string) => void;
  value: string;
}

/* Inline function */

function EditBox({ onChange, value }: EditBoxProps) {
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}

/* Separate function */

/*
function EditBox({ onChange, value }: EditBoxProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <input autoFocus onChange={handleChange} value={value} />
  );
}
*/

export default EditBox;
