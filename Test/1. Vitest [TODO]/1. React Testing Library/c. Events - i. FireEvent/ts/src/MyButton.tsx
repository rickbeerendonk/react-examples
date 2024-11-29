/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

interface MyButtonProps {
  onClick: () => void;
}

function MyButton({ onClick }: MyButtonProps) {
  function handleClick() {
    return onClick();
  }

  return <button onClick={handleClick}>Click me!</button>;
}

export default MyButton;
