/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function Dangerous() {
  // Pull request: https://github.com/facebook/react/pull/15047
  /*
    Dangerous:
    <a href />
    <form action />
    <iframe src />
    <area href />
    <button formaction />
    <input formaction />
    <frame src />
  */
  return <a href="javascript:alert('Will be impossible soon.')">Dangerous</a>;
}

export default Dangerous;
