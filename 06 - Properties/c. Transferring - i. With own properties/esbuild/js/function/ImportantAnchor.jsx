/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function ImportantAnchor({ highlight, children, ...otherProps }) {
  return (
    <a {...otherProps}>
      {highlight} {children} {highlight}
    </a>
  );
}

export default ImportantAnchor;
