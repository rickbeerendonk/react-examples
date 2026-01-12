/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

export default function App() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  function getNameListItems() {
    let result = new Array<React.JSX.Element>();
    for (const name of names) {
      result.push(<li key={name}>Hello {name}</li>);
    }
    return result;
  }

  return (
    <>
      <h1>Greetings</h1>
      <ul>{getNameListItems()}</ul>
    </>
  );
}
