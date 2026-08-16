/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

export type RoomId = 'amsterdam' | 'keukenhof' | 'kinderdijk';

interface Connection {
  connect(): void;
  disconnect(): void;
  on(event: string, callback: (message: string) => void): void;
}

export function createConnection(roomId: RoomId): Connection {
  return {
    connect() {
      console.log(`✅ Connecting to "${roomId}" room...`);
    },
    disconnect() {
      console.log(`❌ Disconnecting from "${roomId}" room...`);
    },
    on(event: string, callback: (message: string) => void) {
      console.log(`📩 Listening for ${event} events in "${roomId}"`);
      // In real app, this would set up an event listener
      setTimeout(
        () => callback('Welkom! Tip: check out the local attractions.'),
        1000
      );
    }
  };
}
