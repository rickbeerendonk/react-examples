/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

export default function App() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  let nameListItems = [];
  for (const name of names) {
    nameListItems.push(<li key={name}>Hello {name}</li>);
  }

  return (
    <>
      <h1>Greetings</h1>
      <ul>{nameListItems}</ul>
    </>
  );
}
