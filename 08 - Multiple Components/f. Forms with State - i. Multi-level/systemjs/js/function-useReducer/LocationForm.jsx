/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const defaultLocation = {
  city: '',
  address: {
    street: '',
    number: 0
  }
};

const RESET = 'RESET';
const UPDATE = 'UPDATE';

function objectReducer(obj, action) {
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

  switch (action.type) {
    case RESET:
      return action.payload;
    case UPDATE:
      return update(obj, action.payload.name.split('.'), action.payload.value);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function LocationForm({ onAdd }) {
  const [location, dispatchLocation] = React.useReducer(
    objectReducer,
    defaultLocation
  );

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(location);
    dispatchLocation({ type: RESET, payload: defaultLocation });
  }

  function handleChange({ target: { name, value } }) {
    dispatchLocation({ type: UPDATE, payload: { name, value } });
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
