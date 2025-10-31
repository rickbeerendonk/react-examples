/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let requestCount = 0;

export async function saveCommentToServer(comment) {
  await delay(2000); // Simulate network delay

  requestCount++;

  // Simulate occasional failures (every 3rd request fails)
  if (requestCount % 3 === 0) {
    throw new Error('Server error: Failed to save comment');
  }

  return { text: comment, id: Date.now() };
}
