/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import GreetingEditor from './GreetingEditor.tsx';

const root = createRoot(document.getElementById('root') as Element, {
  onCaughtError(
    error: Error,
    errorInfo: { componentStack?: string | undefined }
  ) {
    console.group('onCaughtError');
    console.table(error);
    //console.log('error.message:', error.message);
    //console.log('error.stack:', error.stack);
    console.table(errorInfo);
    //console.log('errorInfo.componentStack:', errorInfo.componentStack);
    console.groupEnd();
  },
  onUncaughtError(
    error: Error,
    errorInfo: {
      componentStack?: string | undefined;
      errorBoundary?: React.Component<unknown> | undefined;
    }
  ) {
    console.group('onUncaughtError');
    console.table(error);
    //console.log('error.message:', error.message);
    //console.log('error.stack:', error.stack);
    console.table(errorInfo);
    //console.log('errorInfo.componentStack:', errorInfo.componentStack);
    //console.log('errorInfo.errorBoundary:', errorInfo.errorBoundary);
    console.groupEnd();
  }
});
root.render(<GreetingEditor />);
