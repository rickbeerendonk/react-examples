/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2022 Rick Beerendonk     !*/

import React from 'react';

type CustomContentProps = {
  name?: string;
};

function CustomContent({ name }: CustomContentProps) {
  return (
    <h2>
      <u>Hi {name}</u>
    </h2>
  );
}

export default CustomContent;
