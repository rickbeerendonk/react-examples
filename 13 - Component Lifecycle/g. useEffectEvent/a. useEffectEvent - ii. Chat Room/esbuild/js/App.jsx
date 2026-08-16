/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/*
 * useEffectEvent - Chat Room Example
 * Available in React 19.2+
 * This shows a practical use case: connecting to a chat with latest theme
 */

import { useEffect, useEffectEvent, useState } from 'react';

import { createConnection } from './chat-connection.js';

export default function ChatRoom() {
  const [roomId, setRoomId] = useState('amsterdam');
  const [theme, setTheme] = useState('dark');

  // WITHOUT useEffectEvent, you'd have to include `theme` in dependencies
  // which would cause reconnection every time theme changes!

  // WITH useEffectEvent, onMessage can access latest theme
  // without being a dependency
  const onMessage = useEffectEvent(message => {
    console.log(`📨 [${theme} theme] New message: ${message}`);
    // In real app: showNotification(message, theme)
  });

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    connection.on('message', onMessage);

    return () => connection.disconnect();

    // Only reconnect when roomId changes, NOT when theme changes!
  }, [roomId]); // theme is NOT in dependencies!

  return (
    <div>
      <h2>useEffectEvent - Chat Room Example</h2>
      <p>Available in React 19.2+</p>

      <div>
        <label>
          Choose room:{' '}
          <select value={roomId} onChange={e => setRoomId(e.target.value)}>
            <option value="amsterdam">Amsterdam</option>
            <option value="keukenhof">Keukenhof</option>
            <option value="kinderdijk">Kinderdijk</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Choose theme:{' '}
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
      </div>

      <hr />

      <h3>Key Benefit:</h3>
      <p>
        Changing the <strong>theme</strong> does NOT reconnect to the chat!
      </p>
      <p>But messages still use the latest theme value.</p>
      <p>Check console to see connections/disconnections.</p>
    </div>
  );
}
