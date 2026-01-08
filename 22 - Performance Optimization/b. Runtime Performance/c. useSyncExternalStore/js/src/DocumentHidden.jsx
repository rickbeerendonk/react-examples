/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useSyncExternalStore } from 'react';

function getSnapshot() {
  return document.hidden;
}

function subscribe(callback) {
  console.log('Add subscription');

  document.addEventListener('visibilitychange', callback);
  return () => {
    document.removeEventListener('visibilitychange', callback);

    console.log('Remove subscription');
  };
}

function DocumentHidden() {
  const isHidden = useSyncExternalStore(subscribe, getSnapshot);

  console.log('Hidden: ', isHidden);

  return <h1>Document is {isHidden ? 'Hidden' : 'Visible'}!</h1>;
}

export default DocumentHidden;
