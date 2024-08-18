/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Formik, Field } from 'formik';

function App() {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(data, { resetForm }) => {
        // Handle data
        alert(`Name = ${data.name}`);

        // Clear data
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <Field id="name" name="name" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
