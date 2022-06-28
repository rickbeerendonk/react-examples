// European Union Public License version 1.2
// Copyright © 2022 Rick Beerendonk

// eslint-disable-next-line no-undef
importScripts('../../../../node_modules/@babel/standalone/babel.min.js');

self.addEventListener('install', () => {
  // Force update
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Claiming this ServiceWorker
  event.waitUntil(self.clients.claim());

  // Remove (when the client closes)
  self.registration.unregister();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        console.log('[fetch] Response:', response);
        return response;
      })
      .catch(function (error) {
        console.error('[fetch] Failed:', error);
        throw error;
      })
  );
});
