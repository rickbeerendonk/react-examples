/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    /***/ console.log('GreetingEditor - constructor()');

    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(name) {
    /***/ console.log('GreetingEditor - onChange() <begin>');

    this.setState(() => {
      /***/ console.log('GreetingEditor - onChange() - callback setState()');

      return { name };
    });

    /*

    function setState(func) {
      batch.add(func);
    }

    */

    /***/ console.log('GreetingEditor - onChange() <end>');
  }
  render() {
    /***/ console.log('GreetingEditor - render() <begin>');
    try {
      return (
        <React.Fragment>
          <EditBox onChange={this.onChange} value={this.state.name} />
          <Greeting name={this.state.name} />
        </React.Fragment>
      );
    } finally {
      /***/ console.log('GreetingEditor - render() <end>');
    }
  }
}
