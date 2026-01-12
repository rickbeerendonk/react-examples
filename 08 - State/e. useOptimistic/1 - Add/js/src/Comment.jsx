/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState, useOptimistic } from 'react';

import { delay, saveCommentToServer } from './utils/index.js';

export default function Comments({ initialComments }) {
  // 1. Regular state - the actual/confirmed data from server
  const [comments, setComments] = useState(initialComments);

  // 2. useOptimistic hook returns:
  //    - optimisticComments: state to render (includes pending updates)
  //    - addOptimisticComment: function to add optimistic update
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments, // Current state (source of truth)
    (state, newComment) => [...state, { text: newComment, sending: true }] // Optimistic update function
  );

  // Note: Using form action={handleSubmit} (not onSubmit) automatically provides FormData
  // instead of the event object. This is React's newer pattern for simple form submission.
  // Controlled components are still valuable for real-time validation, complex interactions,
  // or when you need to track input state during typing. You can even combine both!
  async function handleSubmit(formData) {
    const newComment = formData.get('comment');

    // 3. Immediately add optimistic update (UI updates instantly)
    addOptimisticComment(newComment);

    try {
      // 4. Send to server (async operation)
      const savedComment = await saveCommentToServer(newComment);

      // 5. On success: update actual state with server response (optimistic state auto-syncs)
      setComments([...comments, savedComment]);
    } catch {
      // 6. On failure: optimistic update needs manual rollback
      alert('Failed to save comment');
    } finally {
      // Uncommented to show when addOptimisticComment
      // does the internal rollback
      //console.log('Before delay in finally');
      //await delay(3000);
      //console.log('Finished delay in finally');
    }
  }

  return (
    <form action={handleSubmit}>
      <input name="comment" placeholder="Write a comment..." />
      <button type="submit">Send</button>
      <ul>
        {/* 7. Render optimistic state (not actual state) */}
        {optimisticComments.map((comment, i) => (
          <li key={i} style={{ opacity: comment.sending ? 0.5 : 1 }}>
            {comment.text}
            {/* Visual feedback: pending items shown dimmed */}
          </li>
        ))}
      </ul>
    </form>
  );
}
