/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default function ConditionalRender({ show, message = 'Visible' }) {
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {show && <p data-testid="conditional-message">{message}</p>}
      {!show && <p data-testid="hidden-message">Hidden</p>}
    </div>
  );
}
