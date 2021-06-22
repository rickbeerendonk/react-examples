/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import './Greeting.css';

interface IGreetingProps {
  name: string;
}

const Greeting: React.FC<IGreetingProps> = ({ name }) =>
  name ? <h1 className="greeting">Hello {name}!</h1> : null;

export default Greeting;
