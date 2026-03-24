/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

function ChildWithForm(props) {
  function addItem(formData) {
    // Extract data from FormData (React 19)
    const item = {
      name: formData.get('name'),
      email: formData.get('email')
    };
    props.onAdd(item);
    // Form auto-resets after submission!
  }

  return (
    <form action={addItem}>
      <input name="name" placeholder="Enter name" required />
      <input name="email" type="email" placeholder="Enter email" required />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
