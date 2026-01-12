/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default function ChildrenComponent({ children, title = 'Wrapper' }) {
  return (
    <div data-testid="wrapper">
      <h2>{title}</h2>
      <div data-testid="children-container">{children}</div>
    </div>
  );
}
