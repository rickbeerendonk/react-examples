/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function update(obj, keyArray, value) {
  if (keyArray.length === 0) {
    return value;
  }

  const first = keyArray.shift();
  return {
    ...obj,
    [first]: update(obj[first], keyArray, value)
  };
}

const defaultLocation = {
  city: '',
  address: {
    street: '',
    number: 0
  }
};

function LocationForm({ onAdd }) {
  const [location, setLocation] = React.useState(defaultLocation);

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(location);
    setLocation(defaultLocation);
  }

  function handleChange({ target: { name, value } }) {
    setLocation(l => update(l, name.split('.'), value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Street:
        <input
          name="address.street"
          onChange={handleChange}
          value={location.address.street}
        />
      </label>
      <label>
        Number:
        <input
          type="number"
          name="address.number"
          onChange={handleChange}
          value={location.address.number}
        />
      </label>
      <br />
      <label>
        City:
        <input name="city" onChange={handleChange} value={location.city} />
      </label>
      <button>Add</button>
    </form>
  );
}

export default LocationForm;
