/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

class EditBox extends React.Component {
  constructor(props) {
    /***/ console.log('EditBox - constructor()');

    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    /***/ console.log('EditBox - onChange()');

    this.props.onChange(e.target.value);
  }
  render() {
    /***/ console.log('EditBox - render()');

    return <input onChange={this.onChange} value={this.props.value} />;
  }
}

export default EditBox;
