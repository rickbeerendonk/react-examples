/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function Post({ body, title }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <main>{body}</main>
    </React.Fragment>
  );
}

export default Post;
