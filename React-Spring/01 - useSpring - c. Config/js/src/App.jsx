/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import Bar from './Bar.jsx';
import Custom from './Custom.jsx';

export default function App() {
  return (
    <>
      <Bar configName="default" />
      <br />
      <Bar configName="gentle" />
      <br />
      <Bar configName="molasses" />
      <br />
      <Bar configName="slow" />
      <br />
      <Bar configName="stiff" />
      <br />
      <Bar configName="wobbly" />
      <br />
      <Custom />
    </>
  );
}
