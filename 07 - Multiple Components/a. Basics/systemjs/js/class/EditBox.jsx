/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

/* Inline function */

function EditBox({ onChange, value }) {
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}

/* method */

/*
class EditBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <input autoFocus onChange={this.handleChange} value={this.props.value} />
    );
  }
}
*/

export default EditBox;
