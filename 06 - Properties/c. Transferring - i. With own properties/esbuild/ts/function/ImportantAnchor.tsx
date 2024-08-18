/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

interface ImportantAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  highlight: string;
}

function ImportantAnchor({
  highlight,
  children,
  ...otherProps
}: ImportantAnchorProps) {
  return (
    <a {...otherProps}>
      {highlight} {children} {highlight}
    </a>
  );
}

export default ImportantAnchor;
