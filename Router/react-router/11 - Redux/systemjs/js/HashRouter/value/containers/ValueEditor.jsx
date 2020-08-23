/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { change } from '../actions/index';

import NumberBox from '../components/NumberBox';
import Value from '../components/Value';

function ValueEditor({ value, changeValue }) {
  return (
    <React.Fragment>
      <NumberBox onChange={changeValue} value={value} />
      <Value value={value} />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeValue: change
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ValueEditor);
