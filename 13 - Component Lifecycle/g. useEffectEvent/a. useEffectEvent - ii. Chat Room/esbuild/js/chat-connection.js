/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

export function createConnection(roomId) {
  return {
    connect() {
      console.log(`✅ Connecting to "${roomId}" room...`);
    },
    disconnect() {
      console.log(`❌ Disconnecting from "${roomId}" room...`);
    },
    on(event, callback) {
      console.log(`📩 Listening for ${event} events in "${roomId}"`);
      // In real app, this would set up an event listener
      setTimeout(
        () => callback('Welkom! Tip: check out the local attractions.'),
        1000
      );
    }
  };
}
