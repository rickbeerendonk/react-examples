/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

// Server data structure
export interface Comment {
  text: string;
  id?: number;
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let requestCount = 0;

export async function saveCommentToServer(comment: string): Promise<Comment> {
  await delay(2000); // Simulate network delay

  requestCount++;

  // Simulate occasional failures (every 3rd request fails)
  if (requestCount % 3 === 0) {
    throw new Error('Server error: Failed to save comment');
  }

  return { text: comment, id: Date.now() };
}

export async function deleteCommentFromServer(id: number): Promise<void> {
  await delay(2000); // Simulate network delay

  requestCount++;

  // Simulate occasional failures (every 3rd request fails)
  if (requestCount % 3 === 0) {
    throw new Error('Server error: Failed to delete comment');
  }
}
