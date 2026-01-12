/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState, useRef } from 'react';

import {
  deleteCommentFromServer,
  saveCommentToServer,
  type Comment
} from './utils/index.ts';

interface CommentsProps {
  initialComments: Comment[];
}

type DisplayComment = Comment & { sending?: boolean; deleting?: boolean };

export default function Comments({ initialComments }: CommentsProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [comments, setComments] = useState<DisplayComment[]>(initialComments);

  // IMPORTANT: Use onSubmit, NOT action prop!
  // React 19's form action prop automatically wraps submissions in transitions,
  // which defers UI updates until the async action completes.
  // This means optimistic updates won't be visible - you'll only see the final result.
  // With onSubmit, we have full control and optimistic updates appear immediately.
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const text = formData.get('comment') as string;
    if (!text?.trim()) return;

    const tempId = -Date.now();

    // Add optimistic item immediately
    setComments(prev => [...prev, { text, id: tempId, sending: true }]);
    formRef.current?.reset();

    try {
      const saved = await saveCommentToServer(text);
      // Replace temp item with saved item
      setComments(prev => prev.map(c => (c.id === tempId ? { ...saved } : c)));
    } catch {
      // Remove temp item on error
      setComments(prev => prev.filter(c => c.id !== tempId));
      alert('Failed to save comment');
    }
  }

  async function handleDelete(id: number): Promise<void> {
    // Mark as deleting
    setComments(prev =>
      prev.map(c => (c.id === id ? { ...c, deleting: true } : c))
    );

    try {
      await deleteCommentFromServer(id);
      // Remove from list on success
      setComments(prev => prev.filter(c => c.id !== id));
    } catch {
      // Remove deleting flag on error (rollback)
      setComments(prev =>
        prev.map(c => (c.id === id ? { ...c, deleting: false } : c))
      );
      alert('Failed to delete comment');
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="comment" placeholder="Write a comment..." />
      <button type="submit">Send</button>
      <ul>
        {comments.map((comment: DisplayComment) => (
          <li
            key={comment.id}
            style={{
              opacity: comment.sending || comment.deleting ? 0.5 : 1,
              textDecoration: comment.deleting ? 'line-through' : 'none'
            }}
          >
            {comment.text}
            {comment.id && comment.id > 0 && (
              <button
                type="button"
                onClick={() => handleDelete(comment.id!)}
                disabled={comment.deleting}
                style={{ marginLeft: '1em' }}
              >
                {comment.deleting ? 'Deleting...' : 'Delete'}
              </button>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
}
