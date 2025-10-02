/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useId } from 'react';

function StyledButton({ color, precedence }) {
  const id = useId();

  return (
    <>
      <style href={`button-${color}`} precedence={precedence}>
        {`
          .btn-${id} {
            background-color: ${color};
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            margin: 5px;
          }
        `}
      </style>
      <button className={`btn-${id}`}>
        {color} button (precedence: {precedence})
      </button>
    </>
  );
}

export default function App() {
  return (
    <div>
      <h2>Inline Style with Precedence (React 19)</h2>
      <p>
        The &lt;style&gt; component can use <code>precedence</code> and{' '}
        <code>href</code> props
      </p>
      <p>React deduplicates styles with the same href and manages ordering</p>

      <StyledButton color="blue" precedence="high" />
      <StyledButton color="red" precedence="low" />
      <StyledButton color="green" precedence="high" />

      <hr />
      <p>Check HTML &lt;head&gt; - styles are grouped by precedence!</p>
      <p>High precedence styles come after low precedence</p>
    </div>
  );
}
