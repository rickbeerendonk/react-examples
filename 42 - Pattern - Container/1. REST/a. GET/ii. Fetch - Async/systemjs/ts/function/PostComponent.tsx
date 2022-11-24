/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface PostComponentProps {
  title: string;
}

function PostComponent({ title }: PostComponentProps) {
  return <li>{title}</li>;
}

export default PostComponent;
