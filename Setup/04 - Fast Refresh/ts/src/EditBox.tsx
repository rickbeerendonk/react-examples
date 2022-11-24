/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

interface EditBoxProps {
  onChange: (value: string) => void;
  name: string;
}

function EditBox({ onChange, name }: EditBoxProps) {
  return <input onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
