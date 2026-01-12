/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function Dangerous() {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html:
          '<a href="javascript:alert(\'Is impossible unless...\')">Dangerous</a>'
      }}
    />
  );
}

export default Dangerous;
