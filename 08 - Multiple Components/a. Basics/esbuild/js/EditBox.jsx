/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2024 Rick Beerendonk     !*/

function EditBox({ onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return <input onChange={handleChange} value={value} />;
}

export default EditBox;
