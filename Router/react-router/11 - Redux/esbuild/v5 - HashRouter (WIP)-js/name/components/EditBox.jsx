/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

function EditBox({ onChange, name }) {
  return <input onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
