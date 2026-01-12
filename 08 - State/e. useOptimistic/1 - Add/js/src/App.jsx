/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import Comments from './Comment.jsx';

export default function App() {
  const initialComments = [
    { text: 'Great article!', id: 1 },
    { text: 'Thanks for sharing!', id: 2 }
  ];

  return (
    <>
      <h1>Comments</h1>
      <Comments initialComments={initialComments} />
      <p style={{ fontSize: '0.8em', color: '#999', marginTop: '2em' }}>
        Try adding multiple comments quickly.
        <br />
        Every 3rd comment will fail to demonstrate rollback.
      </p>
    </>
  );
}
