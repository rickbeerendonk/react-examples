/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.jsx';

// Define what props.theme will look like
const theme = {
  main: 'blue',
  disabled: 'lightblue'
};
const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
