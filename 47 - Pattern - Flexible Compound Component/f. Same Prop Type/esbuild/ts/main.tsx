/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2022 Rick Beerendon      !*/

import { createRoot } from 'react-dom/client';

import GreetingEditorFactory from './GreetingEditor.tsx';

// Create typed instances: all components now work with type 'string'
const { GreetingEditor, GreetingEditor_Input, GreetingEditor_Text } =
  GreetingEditorFactory<string>();

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <GreetingEditor defaultValue="">
    <GreetingEditor_Input value="" />
    <GreetingEditor_Text value="" />
  </GreetingEditor>
);

/*
function foo<T>(arg: T): T {
  return arg;
}

const result = foo<number>(42);
console.log(result);
*/
