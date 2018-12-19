/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

class GreetingEditor extends React.Component {
  constructor(props) {
    /***/ console.log('GreetingEditor - constructor()');

    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name) {
    /***/ console.log('GreetingEditor - handleChange() <begin>');

    this.setState(() => {
      /***/ console.log(
        'GreetingEditor - handleChange() - callback setState()'
      );

      return { name };
    });

    /*

    function setState(func) {
      batch.add(func);
    }

    */

    /***/ console.log('GreetingEditor - handleChange() <end>');
  }
  render() {
    /***/ console.log('GreetingEditor - render() <begin>');
    try {
      return (
        <React.Fragment>
          <EditBox onChange={this.handleChange} value={this.state.name} />
          <Greeting name={this.state.name} />
        </React.Fragment>
      );
    } finally {
      /***/ console.log('GreetingEditor - render() <end>');
    }
  }
}

export default GreetingEditor;
