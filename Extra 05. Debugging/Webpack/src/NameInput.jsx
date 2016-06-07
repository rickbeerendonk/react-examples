'use strict';

import React from 'react';

export default ({onChange, name}) => (
  <input onChange={onChange} value={name} />
);