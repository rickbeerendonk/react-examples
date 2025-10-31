/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState, useOptimistic } from 'react';

import { saveCommentToServer } from './utils/index.js';

export default function Comments({ initialComments }) {
  const [comments, setComments] = useState(initialComments);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, { text: newComment, sending: true }]
  );

  async function handleSubmit(formData) {
    const newComment = formData.get('comment');
    addOptimisticComment(newComment);

    try {
      await saveCommentToServer(newComment);
      setComments([...comments, { text: newComment }]);
    } catch {
      alert('Failed to save comment');
    }
  }

  return (
    <form action={handleSubmit}>
      <input name="comment" placeholder="Write a comment..." />
      <button type="submit">Send</button>
      <ul>
        {optimisticComments.map((c, i) => (
          <li key={i} style={{ opacity: c.sending ? 0.5 : 1 }}>
            {c.text}
          </li>
        ))}
      </ul>
    </form>
  );
}
