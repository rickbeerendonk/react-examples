/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

/* Inline function */

const EditBox = ({ onChange, value }) => (
  <input onChange={e => onChange(e.target.value)} value={value} />
);

/* method */

/*
class EditBox extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <input onChange={this.onChange} value={this.props.value} />
    );
  }
}
*/

export default EditBox;
