/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk     !*/

interface GreetingProps {
  dark?: boolean;
  default: boolean;
  name: string;
}

function Greeting({ name, default: isDefault, dark }: GreetingProps) {
  return (
    <>
      <h1
        style={{
          color: isDefault ? 'red' : 'black',
          backgroundColor: dark ? 'gray' : 'white'
        }}
      >
        Hello {name}!
      </h1>
      <p>
        props.default: {JSON.stringify(isDefault)}
        <br />
        props.dark: {JSON.stringify(dark)}
      </p>
    </>
  );
}

export default Greeting;
