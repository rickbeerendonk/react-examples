/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useActionState, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const [, /* error */ submitAction /* isPending */] = useActionState(
    async (previousState, formData) => {
      setList(lst => [...lst, formData.get('name')]);

      // handle success
      return null;
    },
    null
  );

  return (
    <>
      <form action={submitAction}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
