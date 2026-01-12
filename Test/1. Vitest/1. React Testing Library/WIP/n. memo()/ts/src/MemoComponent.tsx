/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { memo, useState } from 'react';

interface MemoComponentProps {
  message: string;
  renderCount?: number;
}

const MemoComponent = memo(function MemoizedComponent({
  message,
  renderCount = 0
}: MemoComponentProps) {
  return (
    <div data-testid="memo-component">
      <p>{message}</p>
      <p data-testid="render-count">Render Count: {renderCount}</p>
    </div>
  );
});

MemoComponent.displayName = 'MemoComponent';

export default function MemoDemo() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('Hello Memo');

  return (
    <div>
      <h2>Memo Component Demo</h2>
      <p data-testid="parent-counter">Parent Counter: {counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        data-testid="increment-parent-btn"
      >
        Increment Parent
      </button>
      <button
        onClick={() => setMessage('Message Updated')}
        data-testid="update-message-btn"
      >
        Update Message
      </button>
      <MemoComponent message={message} renderCount={counter} />
    </div>
  );
}
