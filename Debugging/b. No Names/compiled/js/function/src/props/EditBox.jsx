/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

export default function ({ onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return <input onChange={handleChange} value={value} />;
}
