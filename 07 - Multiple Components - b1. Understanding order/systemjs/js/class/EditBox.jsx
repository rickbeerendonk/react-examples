/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

class EditBox extends React.Component {
  constructor(props) {
    /***/ console.log('EditBox - constructor()');

    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    /***/ console.log('EditBox - handleChange()');

    this.props.onChange(e.target.value);
  }
  render() {
    /***/ console.log('EditBox - render()');

    return (
      <input autoFocus onChange={this.handleChange} value={this.props.value} />
    );
  }
}

export default EditBox;
