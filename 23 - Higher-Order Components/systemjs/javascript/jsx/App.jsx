/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import GreetingWithExtras from './GreetingWithExtras';

export default class App extends React.Component {
  render() {
    return <GreetingWithExtras extraColor="red" name="World" />;
  }
}
