/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* Inline function */

function EditBox({ onChange, value }) {
  return <input onChange={e => onChange(e.target.value)} value={value} />;
}

/* Function */

/*
function EditBox({ onChange, value }) {
  function handleChange(e) {
    return onChange(e.target.value);
  }

  return (
    <input onChange={handleChange} value={value} />
  );
}
*/

/* Arrow */

/*
function EditBox({ onChange, value }) {
  const handleChange = e => onChange(e.target.value);
  return (
    <input onChange={handleChange} value={value} />
  );
}
*/

export default EditBox;
