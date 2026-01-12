/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function List(props) {
  return (
    <ul>
      {props.items.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}

export default List;
