/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { Component } from 'react';

import EditBox from './EditBox.jsx';
import Greeting from './Greeting.jsx';

class GreetingEditor extends Component {
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
        <>
          <EditBox onChange={this.handleChange} value={this.state.name} />
          <Greeting name={this.state.name} />
        </>
      );
    } finally {
      /***/ console.log('GreetingEditor - render() <end>');
    }
  }
}

export default GreetingEditor;
