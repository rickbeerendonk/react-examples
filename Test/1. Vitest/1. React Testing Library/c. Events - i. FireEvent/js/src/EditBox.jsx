/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function EditBox({ onChange, value = '' }) {
  function handleChange(e) {
    return onChange(e.target.value);
  }

  return <input onChange={handleChange} value={value} />;
}

export default EditBox;
