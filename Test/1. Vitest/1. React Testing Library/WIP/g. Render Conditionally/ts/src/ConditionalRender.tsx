/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

interface ConditionalRenderProps {
  show: boolean;
  message?: string;
}

export default function ConditionalRender({
  show,
  message = 'Visible'
}: ConditionalRenderProps) {
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {show && <p data-testid="conditional-message">{message}</p>}
      {!show && <p data-testid="hidden-message">Hidden</p>}
    </div>
  );
}
