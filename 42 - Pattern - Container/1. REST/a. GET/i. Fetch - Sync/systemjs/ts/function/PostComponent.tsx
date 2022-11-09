/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface PostComponentProps {
  title: string;
}

const PostComponent: React.FC<PostComponentProps> = ({ title }) => (
  <li>{title}</li>
);

export default PostComponent;
