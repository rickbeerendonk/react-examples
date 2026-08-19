/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

function ChildWithForm(props) {
  function addName(formData) {
    // Extract string data from FormData (React 19)
    const name = formData.get('name');
    props.onAdd(name);
    // Form auto-resets after submission!
  }

  return (
    <form action={addName}>
      <input name="name" placeholder="Enter name" required />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
