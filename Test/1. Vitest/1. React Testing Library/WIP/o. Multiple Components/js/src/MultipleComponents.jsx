/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

function ChildComponent({ title, onClick }) {
  return (
    <button onClick={onClick} data-testid="child-button">
      {title}
    </button>
  );
}

export default function ParentComponent() {
  const handleChildClick = () => {
    console.log('Child clicked');
  };

  return (
    <div data-testid="parent">
      <h2>Parent Component</h2>
      <ChildComponent title="Child 1" onClick={handleChildClick} />
      <ChildComponent title="Child 2" onClick={handleChildClick} />
    </div>
  );
}
